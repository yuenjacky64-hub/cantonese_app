# Performance & Optimizations

The Cantonese Learning App is designed with a "Mobile-First" and "Performance-First" philosophy. To achieve a smooth 60 FPS experience on both high-end and low-end devices, several critical optimizations have been implemented across the codebase.

## Data Structure Optimizations

### Module-Level Pre-computation
To avoid redundant `flatMap` and `filter` operations during component render cycles, all core vocabulary data is pre-processed at the module level in `src/data/lessons.ts`. This ensures that common operations, such as extracting a flattened list of all flashcards, happen only once when the application initializes.

### Search and Indexing
The Home page uses a module-level `lessonsWithSearchIndex` that contains pre-lowercased Cantonese and English fields. This significantly speeds up the filtering of hundreds of lessons during user search by eliminating the overhead of repeated `toLowerCase()` calls and property lookups.

## Algorithmic Optimizations

### O(count) Sampling
Instead of shuffling an entire array of thousands of cards and slicing a few elements, the application's games use an optimized `getRandomElements` utility in `src/utils/array.ts`. This algorithm uses a fast path with random probing (with collision detection) and a fallback single-pass scan. This approach is highly memory-efficient and maintains consistent performance as the dataset grows.

### Mathematical SRS Statistics
Calculating the number of cards due for review is a frequent operation on the Home page. Instead of iterating over all categories and cards, the `getSRSStats` function in `src/utils/srs.ts` uses a mathematical shortcut:
- **Due Count** = `(Total Cards - Reviewed Count) + Reviewed Due Count`.
Since the number of "Reviewed Cards" is typically much smaller than the "Total Cards," this optimization provides a ~6.6x performance boost for large datasets.

## Rendering and UI Optimizations

### Component Memoization
Key UI elements, such as the `LanguageButton` in the header, are wrapped in `React.memo` and use stable callbacks (`useCallback`) to prevent unnecessary re-renders when parent states (like timers) update.

### Deferred Logic
Operations that are not critical to the immediate user interaction are deferred using `setTimeout(..., 0)`. For example, updating the SRS state after a card flip is deferred to ensure that the feedback animation remains perfectly smooth.

### Instant Route Transitions
Route transition animations inside the `IonRouterOutlet` are disabled (`animated={false}`) to eliminate native transition overhead, enabling immediate page shifts and improved responsiveness on low-end devices.

### Audio Lifecycle & Cleanup
To avoid memory leaks and overlapping audio, pages and hooks that manage audio track playback (like `useTTS`, `ListeningQuiz`, and `Flashcard`) use mutable references (`audioRef`) to control the active `HTMLAudioElement`. They strictly pause and release the source upon component unmounting, route changes, or question transitions.

### Lazy Loading and Caching
- **Audio Files**: TTS audio is cached in-memory and fetched only when needed.
- **Bookmarks**: The bookmark list is cached in memory, with a `storage` event listener for cross-tab synchronization.

## Verification and Benchmarking

Performance improvements are not just theoretical; they are verified using a suite of benchmark scripts located in the `benchmarks/` directory.

### Running Benchmarks
Benchmarks can be executed using `bun` or `npx tsx` for rapid iteration and measurement:

```bash
# Example: Run SRS stats benchmark
bun benchmarks/srs_stats_benchmark.ts
```

### Benchmark Suite
Available benchmarks include:
- `srs_stats_benchmark.ts`: Measures the performance of due card calculations.
- `listening_quiz_benchmark.ts`: Tests the O(count) question generation algorithm.
- `tts_cache_benchmark.ts`: Verifies the effectiveness of audio caching.
- `flat_map_optimized.ts`: Measures the impact of pre-computing the flattened card list.
