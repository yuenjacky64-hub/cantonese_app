import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import { shuffleArray, getRandomElements } from '../array';

describe('Array Utilities', () => {
    describe('shuffleArray', () => {
        let mathRandomSpy: MockInstance;

        beforeEach(() => {
            mathRandomSpy = vi.spyOn(Math, 'random');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should return a new array with the same elements', () => {
            const original = [1, 2, 3, 4, 5];
            const shuffled = shuffleArray(original);

            // It should be a new array
            expect(shuffled).not.toBe(original);

            // It should contain all original elements
            expect(shuffled).toHaveLength(original.length);
            expect(shuffled).toEqual(expect.arrayContaining(original));
            expect(original).toEqual(expect.arrayContaining(shuffled));
        });

        it('should not mutate the original array', () => {
            const original = [1, 2, 3];
            const originalCopy = [...original];

            shuffleArray(original);

            expect(original).toEqual(originalCopy);
        });

        it('should handle empty arrays correctly', () => {
            expect(shuffleArray([])).toEqual([]);
        });

        it('should handle single-element arrays correctly', () => {
            expect(shuffleArray([42])).toEqual([42]);
        });

        it('should shuffle deterministically based on Math.random', () => {
            // Mock Math.random to always return 0.5
            // With [1, 2, 3, 4] and Math.random() = 0.5:
            // i=3 (val 4): j = Math.floor(0.5 * 4) = 2. Swap index 3 and 2. -> [1, 2, 4, 3]
            // i=2 (val 4): j = Math.floor(0.5 * 3) = 1. Swap index 2 and 1. -> [1, 4, 2, 3]
            // i=1 (val 4): j = Math.floor(0.5 * 2) = 1. Swap index 1 and 1. -> [1, 4, 2, 3]
            mathRandomSpy.mockReturnValue(0.5);

            const original = [1, 2, 3, 4];
            const shuffled = shuffleArray(original);

            expect(shuffled).toEqual([1, 4, 2, 3]);
            expect(mathRandomSpy).toHaveBeenCalledTimes(3);
        });
    });

    describe('getRandomElements', () => {
        let mathRandomSpy: MockInstance;

        beforeEach(() => {
            mathRandomSpy = vi.spyOn(Math, 'random');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should return the requested number of elements', () => {
            const array = [1, 2, 3, 4, 5];
            const result = getRandomElements(array, 3);

            expect(result).toHaveLength(3);

            // All returned elements should be from the original array
            result.forEach(item => {
                expect(array).toContain(item);
            });

            // Elements should be unique
            const uniqueSet = new Set(result);
            expect(uniqueSet.size).toBe(result.length);
        });

        it('should return an empty array if count is 0', () => {
            const array = [1, 2, 3];
            expect(getRandomElements(array, 0)).toEqual([]);
        });

        it('should return at most the array length if count > length', () => {
            const array = [1, 2, 3];
            const result = getRandomElements(array, 5);

            expect(result).toHaveLength(3);
            expect(result).toEqual(expect.arrayContaining(array));
        });

        it('should exclude elements matching the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const excludeEvens = (x: number) => x % 2 === 0;

            const result = getRandomElements(array, 2, excludeEvens);

            expect(result).toHaveLength(2);
            result.forEach(item => {
                expect(item % 2).not.toBe(0); // Should be odd
            });
        });

        it('should use fallback path if random probing fails to find enough elements', () => {
            const array = [1, 2, 3, 4, 5];

            // Make Math.random always return 0, which targets index 0.
            // Fast path will try maxAttempts (20*3=60) times on index 0.
            // After hitting attempts limit, fallback path (linear scan) will pick the rest.
            mathRandomSpy.mockReturnValue(0);

            // We want 3 elements, but we exclude the 1st one (index 0, value 1)
            // Fast path will fail completely.
            // Fallback path will start at startIdx = Math.floor(0 * 5) = 0.
            // i=0: idx=0 (val 1) -> excluded
            // i=1: idx=1 (val 2) -> included
            // i=2: idx=2 (val 3) -> included
            // i=3: idx=3 (val 4) -> included
            // i=4: idx=4 (val 5) -> not needed
            const result = getRandomElements(array, 3, x => x === 1);

            expect(result).toHaveLength(3);
            expect(result).toEqual([2, 3, 4]);

            // Verify it attempted fast path and triggered fallback
            expect(mathRandomSpy).toHaveBeenCalled();
        });

        it('should return fewer elements if not enough match the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            // Exclude everything except 1
            const excludeExceptOne = (x: number) => x !== 1;

            const result = getRandomElements(array, 3, excludeExceptOne);

            expect(result).toHaveLength(1);
            expect(result).toEqual([1]);
        });
    });
});
