/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * Returns a new shuffled array.
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Gets random elements from an array with O(count) complexity.
 * @param array The source array
 * @param count Number of elements to pick
 * @param excludePredicate Optional function to exclude certain elements
 */
export const getRandomElements = <T,>(
    array: T[],
    count: number,
    excludePredicate?: (item: T) => boolean
): T[] => {
    const result: T[] = [];
    const selectedIndices = new Set<number>();

    // Fast path: Random probing
    // Use a limited number of attempts to find unique elements randomly
    const maxAttempts = count * 20;
    let attempts = 0;

    while (result.length < count && attempts < maxAttempts && selectedIndices.size < array.length) {
        attempts++;
        const idx = Math.floor(Math.random() * array.length);
        if (selectedIndices.has(idx)) continue;

        const item = array[idx];
        selectedIndices.add(idx);

        if (excludePredicate && excludePredicate(item)) continue;

        result.push(item);
    }

    // Fallback path: Single-pass lazy scan (O(N))
    // If random probing didn't find enough elements (e.g., small dataset or many exclusions)
    if (result.length < count && selectedIndices.size < array.length) {
        const startIdx = Math.floor(Math.random() * array.length);
        for (let i = 0; i < array.length && result.length < count; i++) {
            const idx = (startIdx + i) % array.length;
            if (selectedIndices.has(idx)) continue;

            const item = array[idx];
            selectedIndices.add(idx);

            if (excludePredicate && excludePredicate(item)) continue;

            result.push(item);
        }
    }

    return result;
};
