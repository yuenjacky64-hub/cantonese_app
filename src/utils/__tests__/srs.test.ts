/**
 * Unit tests for SRS (Spaced Repetition System) utility functions
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage before importing srs module
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

// Import after mocking
import { loadSRS, saveSRS, updateCardSRS, SRSData, _resetCache, getSRSStats, getDueCards } from '../srs';
import { lessons } from '../../data/lessons';

describe('SRS Utility Functions', () => {
    beforeEach(() => {
        localStorageMock.clear();
        vi.clearAllMocks();
        _resetCache();
    });

    describe('loadSRS', () => {
        it('should return empty object when no data exists', () => {
            const result = loadSRS();
            expect(result).toEqual({});
        });

        it('should migrate legacy { nextReview, level } records on load', () => {
            // Old schema with only nextReview + level — emulate a user
            // who upgraded from the pre-SM-2 build.
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify({
                'card-1': { nextReview: 1000, level: 2 },
            }));

            const result = loadSRS();
            const card = result['card-1']!;
            expect(card.level).toBe(2);
            // Legacy formula was 3 days × level, so 6.
            expect(card.interval).toBe(6);
            // Ease should default to the SM-2 starting point.
            expect(card.easeFactor).toBeCloseTo(2.5);
        });

        it('should return empty object on parse error', () => {
            const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            localStorageMock.getItem.mockReturnValueOnce('invalid json{');

            const result = loadSRS();
            expect(result).toEqual({});
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });
    });

    describe('saveSRS', () => {
        it('should save data to localStorage', () => {
            vi.useFakeTimers();
            const data: SRSData = {
                'card-1': { nextReview: 1000, level: 1, interval: 1, easeFactor: 2.5 },
            };

            saveSRS(data);

            // Trigger debounce
            vi.advanceTimersByTime(2000);

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'srs-data',
                JSON.stringify(data)
            );
            vi.useRealTimers();
        });
    });

    describe('updateCardSRS (SM-2)', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('schedules a brand-new card 1 day out on first correct answer', () => {
            const result = updateCardSRS('test-card-1', true);

            expect(result.level).toBe(1);
            expect(result.interval).toBe(1);
            expect(result.nextReview).toBe(Date.now() + 1 * 24 * 60 * 60 * 1000);
        });

        it('schedules a card 3 days out on its second correct answer', () => {
            updateCardSRS('test-card-2', true); // first → 1 day, reps=1
            const result = updateCardSRS('test-card-2', true); // second → 3 days, reps=2

            expect(result.interval).toBe(3);
            expect(result.nextReview).toBe(Date.now() + 3 * 24 * 60 * 60 * 1000);
        });

        it('grows the interval by the ease factor on subsequent correct answers', () => {
            updateCardSRS('test-card-3', true); // 1 day
            updateCardSRS('test-card-3', true); // 3 days
            const result = updateCardSRS('test-card-3', true); // ≈ 3 × ease

            // ease started at 2.5 and grew by 0.05 on each of the 3 correct
            // answers, so it's 2.65 at the moment we compute the third
            // interval (2.5 + 0.05 + 0.05 + 0.05 = 2.65). 3 × 2.65 = 7.95
            // → 8 after rounding.
            expect(result.interval).toBe(8);
            expect(result.easeFactor).toBeCloseTo(2.65);
        });

        it('resets to 10 min and drops ease on a wrong answer', () => {
            updateCardSRS('test-card-4', true);
            updateCardSRS('test-card-4', true);
            const result = updateCardSRS('test-card-4', false);

            expect(result.level).toBe(0);
            expect(result.interval).toBe(0);
            expect(result.nextReview).toBe(Date.now() + 10 * 60 * 1000);
            expect(result.lapses).toBe(1);
            // Ease started 2.5, +0.05 + 0.05 - 0.20 = 2.4
            expect(result.easeFactor).toBeCloseTo(2.4);
        });

        it('floors ease at the minimum after many failures', () => {
            for (let i = 0; i < 10; i++) updateCardSRS('test-card-5', false);
            const data = loadSRS();
            expect(data['test-card-5']!.easeFactor).toBeCloseTo(1.3);
        });
    });

    describe('getDueCards', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should return all cards when there is no SRS data (all new)', () => {
            const dueCards = getDueCards();
            const totalCards = lessons.reduce((acc, cat) => acc + cat.cards.length, 0);

            // By default, no cards have SRS state, so all are considered due (new)
            expect(dueCards.length).toBe(totalCards);
            expect(dueCards.length).toBeGreaterThan(0);
        });

        it('should return only past-due and new cards, filtering out future-scheduled cards', () => {
            const now = Date.now();
            const futureTime = now + 100000;
            const pastTime = now - 100000;

            const card1Id = lessons[0]!.cards[0]!.id;
            const card2Id = lessons[0]!.cards[1]!.id;

            const mockData: SRSData = {
                [card1Id]: { nextReview: futureTime, level: 1, interval: 1, easeFactor: 2.5 }, // Future (not due)
                [card2Id]: { nextReview: pastTime, level: 1, interval: 1, easeFactor: 2.5 }    // Past (due)
            };

            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));
            _resetCache();

            const dueCards = getDueCards();
            const totalCards = lessons.reduce((acc, cat) => acc + cat.cards.length, 0);

            // Expected: totalCards - 1 (since only card1Id is not due, card2Id is past due, and the rest are new/due)
            expect(dueCards.length).toBe(totalCards - 1);

            // Verify card1Id is NOT in the due cards list
            expect(dueCards.find(c => c.id === card1Id)).toBeUndefined();

            // Verify card2Id IS in the due cards list
            expect(dueCards.find(c => c.id === card2Id)).toBeDefined();
        });

        it('should return empty array if all cards are reviewed and scheduled for the future', () => {
            const now = Date.now();
            const futureTime = now + 100000;
            const mockData: SRSData = {};

            // Mark all cards as reviewed and scheduled for the future
            lessons.forEach(category => {
                category.cards.forEach(card => {
                    mockData[card.id] = { nextReview: futureTime, level: 1, interval: 1, easeFactor: 2.5 };
                });
            });

            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));
            _resetCache();

            const dueCards = getDueCards();
            expect(dueCards.length).toBe(0);
            expect(dueCards).toEqual([]);
        });
    });

    describe('getSRSStats', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should calculate dueCount correctly', () => {
            // Initial state: no SRS data, all cards are "new" and thus due
            const initialStats = getSRSStats();
            expect(initialStats.totalCards).toBeGreaterThan(0);
            expect(initialStats.dueCount).toBe(initialStats.totalCards);
            expect(initialStats.reviewedCount).toBe(0);

            // Mock some SRS data
            // Card '1' (from 'greetings') reviewed and due in future (not due now)
            // Card '2' (from 'greetings') reviewed and due in past (due now)
            const futureTime = Date.now() + 100000;
            const pastTime = Date.now() - 100000;

            const mockData: SRSData = {
                '1': { nextReview: futureTime, level: 1, interval: 1, easeFactor: 2.5 }, // Not Due
                '2': { nextReview: pastTime, level: 1, interval: 1, easeFactor: 2.5 }    // Due
            };

            // We use localStorageMock to inject data because getSRSStats calls loadSRS()
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));
            // Reset cache to force reload
            _resetCache();

            const stats = getSRSStats();

            // Reviewed count should be 2
            expect(stats.reviewedCount).toBe(2);

            // Due count should be totalCards - 1 (since '1' is not due, but '2' is due, and all others are new/due)
            expect(stats.dueCount).toBe(stats.totalCards - 1);
        });
    });
});
