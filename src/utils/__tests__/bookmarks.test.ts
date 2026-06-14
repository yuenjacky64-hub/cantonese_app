/**
 * Unit tests for Bookmark utility functions
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage before importing bookmarks module
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
        clear: vi.fn(() => { store = {}; }),
        removeItem: vi.fn((key: string) => { delete store[key]; }),
    };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

import {
    BOOKMARKS_KEY,
    getBookmarks,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    resetBookmarksCache
} from '../bookmarks';

describe('Bookmark Utility Functions', () => {
    beforeEach(() => {
        localStorageMock.clear();
        vi.clearAllMocks();
        resetBookmarksCache();
    });

    describe('getBookmarks', () => {
        it('should return empty array when no bookmarks exist', () => {
            const result = getBookmarks();
            expect(result).toEqual([]);
        });

        it('should return parsed bookmarks from localStorage', () => {
            const mockBookmarks = ['card-1', 'card-2', 'card-3'];
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockBookmarks));

            const result = getBookmarks();
            expect(result).toEqual(mockBookmarks);
        });

        it('should return empty array on parse error', () => {
            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            localStorageMock.getItem.mockReturnValueOnce('not valid json');

            const result = getBookmarks();
            expect(result).toEqual([]);
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });

        it('should use cached bookmarks on subsequent calls', () => {
            const mockBookmarks = ['card-1', 'card-2'];
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockBookmarks));

            // First call hits localStorage
            const result1 = getBookmarks();
            expect(result1).toEqual(mockBookmarks);
            expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);

            // Second call should use cache
            const result2 = getBookmarks();
            expect(result2).toEqual(mockBookmarks);
            expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
        });
    });

    describe('isBookmarked', () => {
        it('should return false for non-bookmarked card', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            const result = isBookmarked('card-2');
            expect(result).toBe(false);
        });

        it('should return true for bookmarked card', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            const result = isBookmarked('card-2');
            expect(result).toBe(true);
        });
    });

    describe('addBookmark', () => {
        it('should add new bookmark to empty list', () => {
            addBookmark('card-1');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1'])
            );
        });

        it('should add new bookmark to existing list', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            addBookmark('card-2');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1', 'card-2'])
            );
        });

        it('should not add duplicate bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            addBookmark('card-1');

            // setItem should not be called since card already exists
            expect(localStorageMock.setItem).not.toHaveBeenCalled();
        });

        it('should fetch fresh data before adding bookmark', () => {
            // Setup initial state
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            // Populate cache with old data
            getBookmarks();

            // Simulate external update (e.g. other tab) by updating what getItem returns
            // Note: In this test setup, we mock what getItem returns next.
            // If addBookmark didn't re-fetch, it would use the cached ['card-1'] and add 'card-3' => ['card-1', 'card-3'].
            // If it re-fetches, it gets ['card-1', 'card-2'] and adds 'card-3' => ['card-1', 'card-2', 'card-3'].

            // We need to carefully orchestrate the mock returns.
            // Call 1 (getBookmarks): returns ['card-1']
            // Call 2 (addBookmark -> getFreshBookmarks): returns ['card-1', 'card-2']

            localStorageMock.getItem
                .mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            addBookmark('card-3');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1', 'card-2', 'card-3'])
            );
        });
    });

    describe('removeBookmark', () => {
        it('should remove existing bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            removeBookmark('card-1');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-2'])
            );
        });

        it('should do nothing when removing non-existent bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            removeBookmark('card-2');

            expect(localStorageMock.setItem).not.toHaveBeenCalled();
        });

        it('should fetch fresh data before removing bookmark', () => {
            // Setup initial state
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            // Populate cache
            getBookmarks();

            // Simulate external update: now storage has ['card-1', 'card-2']
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            // Remove card-2
            removeBookmark('card-2');

            // Should result in ['card-1'] being saved
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1'])
            );
        });
    });

    describe('toggleBookmark', () => {
        it('should add bookmark and return true when not bookmarked', () => {
            // First call for isBookmarked (cached)
            // Second call for addBookmark (fresh fetch)
            localStorageMock.getItem
                .mockReturnValueOnce(JSON.stringify([]))
                .mockReturnValueOnce(JSON.stringify([]));

            const result = toggleBookmark('card-1');

            expect(result).toBe(true);
        });

        it('should remove bookmark and return false when already bookmarked', () => {
            // First call for isBookmarked (cached)
            // Second call for removeBookmark (fresh fetch)
            localStorageMock.getItem
                .mockReturnValueOnce(JSON.stringify(['card-1']))
                .mockReturnValueOnce(JSON.stringify(['card-1']));

            const result = toggleBookmark('card-1');

            expect(result).toBe(false);
        });
    });
});
