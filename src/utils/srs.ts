import { lessons, Flashcard } from '../data/lessons';

/**
 * State per card. We use a modified SM-2 (Anki-style) scheduler with
 * binary feedback:
 *
 *   - `interval` is the gap (in days) used to schedule the next review.
 *   - `easeFactor` is a multiplier that grows on correct answers and
 *     shrinks on wrong ones. Bounded to [1.3, 2.8].
 *   - `level` is preserved for backwards-compat with legacy state and
 *     surfaced in stats; new code should prefer `interval`.
 *
 * Legacy state ({ nextReview, level }) is migrated transparently on
 * first load — see `migrateLegacyState`.
 */
export interface SRSState {
  nextReview: number;
  level: number;
  interval: number;     // days
  easeFactor: number;   // multiplier
  /** Total times this card has been reviewed. */
  reps?: number;
  /** Times this card has been forgotten. Used to surface "leech" cards. */
  lapses?: number;
}

// SM-2 tunables — picked to feel like Anki defaults but slightly gentler
// (Anki uses 2.5/0.15/0.20, but with binary feedback we want correct
// answers to advance a little faster to compensate for no "easy" grade).
const EASE_DEFAULT = 2.5;
const EASE_MIN = 1.3;
const EASE_MAX = 2.8;
const EASE_DELTA_CORRECT = 0.05;
const EASE_DELTA_WRONG = -0.20;
const RELEARN_INTERVAL_MIN = 10; // minutes after a wrong answer
const FIRST_CORRECT_INTERVAL_DAYS = 1;
const SECOND_CORRECT_INTERVAL_DAYS = 3;

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
 * Migrate a legacy { nextReview, level } record into the SM-2 shape.
 * Idempotent — if the record already has interval/easeFactor it's
 * returned unchanged. Called lazily on every load.
 */
const migrateLegacyState = (raw: Partial<SRSState>): SRSState => {
  if (typeof raw.interval === 'number' && typeof raw.easeFactor === 'number') {
    return raw as SRSState;
  }
  const level = typeof raw.level === 'number' ? raw.level : 0;
  // Map old level → interval using the old formula (3 days × level),
  // so existing users don't see their queue suddenly explode or compress.
  const interval = level > 0 ? Math.max(1, 3 * level) : 0;
  return {
    nextReview: typeof raw.nextReview === 'number' ? raw.nextReview : 0,
    level,
    interval,
    easeFactor: EASE_DEFAULT,
  };
};

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
    const parsed = (data ? JSON.parse(data) : {}) as Record<string, Partial<SRSState>>;
    const migrated: SRSData = {};
    for (const [cardId, state] of Object.entries(parsed)) {
      migrated[cardId] = migrateLegacyState(state);
    }
    srsCache = migrated;
    // Invalidate stats cache when data is reloaded
    statsCache = null;
    return srsCache;
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

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * SM-2 (Anki-style) scheduler with binary feedback.
 *
 * On a correct answer:
 *   - reps += 1
 *   - first correct: interval = 1 day; second: 3 days; thereafter:
 *     interval = previousInterval × easeFactor (rounded).
 *   - easeFactor inches up by EASE_DELTA_CORRECT, capped at EASE_MAX.
 *
 * On a wrong answer:
 *   - interval is reset; the card returns to the queue in
 *     RELEARN_INTERVAL_MIN minutes for re-learning.
 *   - easeFactor drops by EASE_DELTA_WRONG, floored at EASE_MIN — so
 *     leech cards naturally show up more often without ever
 *     disappearing into "you'll see this again in 60 days" purgatory.
 *   - lapses += 1.
 *
 * `level` is kept in sync (++ on correct, 0 on wrong) so any UI that
 * still surfaces "level" reads sensibly.
 */
export const updateCardSRS = (cardId: string, isCorrect: boolean): SRSState => {
  const data = loadSRS();
  const current: SRSState = data[cardId] ?? {
    nextReview: 0,
    level: 0,
    interval: 0,
    easeFactor: EASE_DEFAULT,
    reps: 0,
    lapses: 0,
  };

  const reps = (current.reps ?? 0);
  const lapses = (current.lapses ?? 0);
  let nextReview: number;
  let level: number;
  let interval: number;
  let easeFactor: number;
  let nextReps: number;
  let nextLapses: number;

  if (isCorrect) {
    nextReps = reps + 1;
    nextLapses = lapses;
    easeFactor = Math.min(EASE_MAX, current.easeFactor + EASE_DELTA_CORRECT);
    if (nextReps === 1) interval = FIRST_CORRECT_INTERVAL_DAYS;
    else if (nextReps === 2) interval = SECOND_CORRECT_INTERVAL_DAYS;
    else interval = Math.max(1, Math.round(current.interval * easeFactor));
    nextReview = Date.now() + interval * MS_PER_DAY;
    level = current.level + 1;
  } else {
    nextReps = reps;
    nextLapses = lapses + 1;
    easeFactor = Math.max(EASE_MIN, current.easeFactor + EASE_DELTA_WRONG);
    interval = 0;
    nextReview = Date.now() + RELEARN_INTERVAL_MIN * 60 * 1000;
    level = 0;
  }

  const newState: SRSState = {
    nextReview,
    level,
    interval,
    easeFactor,
    reps: nextReps,
    lapses: nextLapses,
  };
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
