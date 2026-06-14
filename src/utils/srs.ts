import { lessons, Flashcard } from '../data/lessons';

/**
 * Interface representing the state of a single card in the SRS system.
 */
export interface SRSState {
  /** Timestamp (in milliseconds) when the card is next due for review. */
  nextReview: number;
  /** The current proficiency level of the card. Higher means known better. */
  level: number;
}

/**
 * Dictionary mapping card IDs to their SRS state.
 */
export type SRSData = Record<string, SRSState>;

const STORAGE_KEY = 'srs-data';
let srsCache: SRSData | null = null;
let saveTimeout: ReturnType<typeof setTimeout> | null = null;
let isDirty = false;

/** Total number of cards in the system. Lazy-evaluated. */
let totalCards: number | null = null;

/** Cache for SRS statistics to avoid redundant calculations. */
let statsCache: { totalCards: number; reviewedCount: number; dueCount: number } | null = null;
let lastStatsUpdate = 0;
const STATS_CACHE_TTL = 60 * 1000; // 1 minute

// For testing purposes
export const _resetCache = () => {
  srsCache = null;
  statsCache = null;
  lastStatsUpdate = 0;
  isDirty = false;
  if (saveTimeout) {
    clearTimeout(saveTimeout);
    saveTimeout = null;
  }
};

/**
 * Flushes any pending SRS data to localStorage immediately.
 * Call this when the app is closing or pausing.
 */
export const flushSave = () => {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
    saveTimeout = null;
  }
  if (srsCache && isDirty) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(srsCache));
      isDirty = false;
    } catch (e) {
      console.error('Failed to save SRS data', e);
    }
  }
};

// Setup event listeners for persistence and cache invalidation
if (typeof window !== 'undefined') {
  // Invalidate cache if localStorage changes externally (e.g. another tab),
  // but only if we don't have unsaved changes.
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && !isDirty) {
      srsCache = null;
      statsCache = null;
    }
  });

  // Ensure data is saved when the user leaves the page
  window.addEventListener('beforeunload', flushSave);
}

if (typeof document !== 'undefined') {
   // Also on visibility change (mobile browsers sometimes terminate without beforeunload)
   document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        flushSave();
    }
  });
}

/**
 * Loads the SRS data from local storage.
 * Uses an in-memory cache to avoid frequent JSON parsing.
 * @returns {SRSData} The loaded SRS data or an empty object if not found or error.
 */
export const loadSRS = (): SRSData => {
  if (srsCache) {
    return srsCache;
  }
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    srsCache = data ? JSON.parse(data) : {};
    // Invalidate stats cache when data is reloaded
    statsCache = null;
    return srsCache as SRSData;
  } catch (e) {
    console.error('Failed to load SRS data', e);
    return {};
  }
};

/**
 * Saves the SRS data to local storage.
 * Updates the in-memory cache immediately and debounces the write to localStorage.
 * @param {SRSData} data - The SRS data to save.
 */
export const saveSRS = (data: SRSData) => {
  srsCache = data;
  isDirty = true;
  // Invalidate stats cache on update
  statsCache = null;

  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  // Debounce save for 2 seconds to reduce synchronous writes
  saveTimeout = setTimeout(() => {
    flushSave();
  }, 2000);
};

/**
 * Updates the SRS state for a specific card based on the user's result.
 *
 * Algorithm:
 * - If Correct:
 *   - Level increases by 1.
 *   - Next review is scheduled for (3 * Level) days from now.
 * - If Incorrect:
 *   - Level resets to 0.
 *   - Next review is scheduled for 10 minutes from now.
 *
 * @param {string} cardId - The unique identifier of the flashcard.
 * @param {boolean} isCorrect - Whether the user answered correctly.
 * @returns {SRSState} The updated state of the card.
 */
export const updateCardSRS = (cardId: string, isCorrect: boolean): SRSState => {
  const data = loadSRS();
  const current = data[cardId] || { nextReview: 0, level: 0 };

  let nextReview: number;
  let level: number;

  if (isCorrect) {
    // Increment level
    level = current.level + 1;

    // Calculate review interval: 3 days * level
    // Example: Level 1 = 3 days, Level 2 = 6 days, etc.
    const daysToAdd = 3 * level;
    nextReview = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;
    console.log(`[Debug] SRS Update for ${cardId}: Correct. Level: ${level}, Next review in ${daysToAdd} days`);
  } else {
    // Reset level on failure
    level = 0;

    // Show again shortly (10 minutes)
    nextReview = Date.now() + 10 * 60 * 1000;
    console.log(`[Debug] SRS Update for ${cardId}: Incorrect. Reset level. Next review in 10 minutes`);
  }

  const newState = { nextReview, level };
  data[cardId] = newState;
  saveSRS(data);
  return newState;
};

/**
 * Retrieves all flashcards that are currently due for review or are new.
 *
 * A card is considered due if:
 * 1. It has no SRS state (New card).
 * 2. Its `nextReview` timestamp is in the past.
 *
 * @returns {Flashcard[]} An array of flashcards due for review.
 */
export const getDueCards = (): Flashcard[] => {
  const srsData = loadSRS();
  const now = Date.now();
  const dueCards: Flashcard[] = [];

  for (let i = 0; i < lessons.length; i++) {
    const category = lessons[i];
    for (let j = 0; j < category.cards.length; j++) {
      const card = category.cards[j];
      const state = srsData[card.id];
      // If no state (New) OR nextReview <= now (Due)
      if (!state || state.nextReview <= now) {
        dueCards.push(card);
      }
    }
  }

  return dueCards;
};

/**
 * Calculates statistics for the SRS system.
 *
 * Performance: Uses a cached result if available and not expired.
 * Optimization: Uses a mathematical formula for dueCount calculation to avoid full array traversals.
 *
 * @returns {Object} An object containing:
 * - `totalCards`: Total number of cards in the system.
 * - `reviewedCount`: Number of cards that have been reviewed at least once.
 * - `dueCount`: Number of cards currently due for review.
 */
export const getSRSStats = () => {
  const now = Date.now();

  // Return cached stats if valid (TTL of 1 minute)
  if (statsCache && (now - lastStatsUpdate < STATS_CACHE_TTL)) {
    return statsCache;
  }

  if (totalCards === null) {
    totalCards = lessons.reduce((acc, cat) => acc + cat.cards.length, 0);
  }

  const srsData = loadSRS();

  // Optimization: Calculate dueCount mathematically:
  // (Total Cards - Reviewed Cards) = New Cards (all are due)
  // New Cards + (Reviewed Cards that are due) = Total Due Count
  const reviewedIds = Object.keys(srsData);
  const reviewedCount = reviewedIds.length;

  let reviewedDueCount = 0;
  // Use a simple loop for performance over Object.values().filter()
  for (let i = 0; i < reviewedIds.length; i++) {
    const state = srsData[reviewedIds[i]];
    if (state.nextReview <= now) {
      reviewedDueCount++;
    }
  }

  const dueCount = (totalCards - reviewedCount) + reviewedDueCount;

  statsCache = { totalCards, reviewedCount, dueCount };
  lastStatsUpdate = now;

  return statsCache;
};
