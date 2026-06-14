# Spaced Repetition System (SRS)

The Cantonese Learning App implements a custom Spaced Repetition System (SRS) algorithm to help users optimize vocabulary retention. The core logic is located in `src/utils/srs.ts`.

## Core Logic

The algorithm tracks a user's proficiency with each vocabulary card based on their review history.

### States

- **Correct**: The user successfully identifies the word/phrase.
- **Incorrect**: The user fails to identify the word/phrase.

### Algorithm (Spaced Repetition)

When a card is reviewed, its `level` and `nextReview` timestamp are updated based on the result:

#### 1. Correct Answer (Success)
- **Level**: Incremented by 1 (`current_level + 1`).
- **Interval**: (3 days * Level).
- **Next Review**: `current_timestamp + (3 * level * 24 * 60 * 60 * 1000)`.

This approach ensures that as a user becomes more familiar with a word, the intervals between reviews grow linearly.

#### 2. Incorrect Answer (Failure)
- **Level**: Reset to 0.
- **Interval**: 10 minutes.
- **Next Review**: `current_timestamp + (10 * 60 * 1000)`.

Resetting to Level 0 ensures that difficult words are re-taught immediately and frequently until mastered.

## Data Structure

The SRS state for all cards is stored as a single object in `localStorage` under the key `srs-data`.

```typescript
export interface SRSState {
  nextReview: number; // Milliseconds timestamp
  level: number;      // Current proficiency level (0, 1, 2, ...)
}

export type SRSData = Record<string, SRSState>; // Map of card ID to state
```

## Performance Optimizations

The SRS module is designed to handle thousands of cards with minimal impact on UI performance:

### In-memory Caching
The entire `SRSData` object is cached in memory upon first load. Subsequent reads and writes update the cache immediately, providing instantaneous feedback in the UI without waiting for `localStorage` access.

### Debounced Persistence
Writes to `localStorage` are debounced by 2 seconds. If a user reviews multiple cards in quick succession (e.g., during a review session), only one disk write occurs after they stop for a moment. This prevents the synchronous `localStorage` API from blocking the main thread.

### Optimized Statistics Calculation
Calculating the count of due cards is optimized using a mathematical formula instead of iterating over the entire lesson list:
- **Total Due** = `(Total Cards - Reviewed Cards)` + `(Reviewed Cards that are Due)`
This approach is significantly faster than a full array traversal, especially when only a small fraction of the total vocabulary has been reviewed.

### Module-level Constants
The total number of cards is pre-computed at the module scope when the app initializes, further reducing the computational cost of progress tracking.
