/**
 * Key used for storing bookmarks in localStorage.
 */
export const BOOKMARKS_KEY = 'cantonese_bookmarks';

// In-memory cache to avoid repeated JSON parsing
let bookmarksCache: string[] | null = null;

/**
 * Resets the internal bookmark cache.
 * Useful for testing or when external changes to localStorage are detected.
 */
export const resetBookmarksCache = (): void => {
  bookmarksCache = null;
};

/**
 * Retrieves the latest list of bookmarks directly from localStorage, bypassing the cache.
 * Updates the cache with the result.
 *
 * @returns {string[]} The fresh list of bookmarks.
 */
const getFreshBookmarks = (): string[] => {
  const stored = localStorage.getItem(BOOKMARKS_KEY);
  if (!stored) {
    bookmarksCache = [];
    return [];
  }
  try {
    const parsed = JSON.parse(stored);
    bookmarksCache = Array.isArray(parsed) ? parsed : [];
    return [...bookmarksCache];
  } catch (e) {
    console.warn('Failed to parse bookmarks', e);
    bookmarksCache = [];
    return [];
  }
};

/**
 * Retrieves the list of bookmarked card IDs from the cache if available,
 * otherwise falls back to localStorage.
 *
 * @returns {string[]} An array of card IDs that are bookmarked.
 */
export const getBookmarks = (): string[] => {
  if (bookmarksCache) {
    return [...bookmarksCache];
  }
  return getFreshBookmarks();
};

/**
 * Checks if a specific card is bookmarked.
 *
 * @param {string} cardId - The ID of the card to check.
 * @returns {boolean} True if the card is bookmarked, false otherwise.
 */
export const isBookmarked = (cardId: string): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.includes(cardId);
};

/**
 * Adds a card to the bookmarks list if it's not already present.
 * Always reads from localStorage first to ensure data consistency across tabs.
 * Persists the change to local storage and updates the cache.
 *
 * @param {string} cardId - The ID of the card to bookmark.
 */
export const addBookmark = (cardId: string): void => {
  console.log(`[Debug] Adding bookmark for card: ${cardId}`);
  // Always get fresh data to avoid race conditions with other tabs
  const bookmarks = getFreshBookmarks();

  if (!bookmarks.includes(cardId)) {
    bookmarks.push(cardId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    // Update cache with the new state
    bookmarksCache = bookmarks;
  }
};

/**
 * Removes a card from the bookmarks list.
 * Always reads from localStorage first to ensure data consistency across tabs.
 * Persists the change to local storage and updates the cache.
 *
 * @param {string} cardId - The ID of the card to remove.
 */
export const removeBookmark = (cardId: string): void => {
  console.log(`[Debug] Removing bookmark for card: ${cardId}`);
  // Always get fresh data to avoid race conditions with other tabs
  const bookmarks = getFreshBookmarks();

  const index = bookmarks.indexOf(cardId);
  if (index !== -1) {
    bookmarks.splice(index, 1);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    // Update cache with the new state
    bookmarksCache = bookmarks;
  }
};

/**
 * Toggles the bookmark state of a card.
 * If bookmarked, it removes it. If not, it adds it.
 *
 * @param {string} cardId - The ID of the card to toggle.
 * @returns {boolean} True if the card is now bookmarked, false if it was removed.
 */
export const toggleBookmark = (cardId: string): boolean => {
  // We can use the cached check here since add/remove will handle concurrency safety
  if (isBookmarked(cardId)) {
    removeBookmark(cardId);
    return false;
  } else {
    addBookmark(cardId);
    return true;
  }
};

// Listen for storage events to invalidate cache when bookmarks change in another tab
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === BOOKMARKS_KEY) {
      resetBookmarksCache();
    }
  });
}
