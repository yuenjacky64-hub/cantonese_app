# Architecture Overview

The Tagalog Learning App is built as a modern, performance-oriented cross-platform application using the Ionic Framework with React. It follows a client-side architecture that prioritizes offline availability and smooth user experiences.

## Core Technologies

- **Frontend**: React 18, Ionic React 8
- **Platform**: Capacitor 6 (for Native Android/iOS), Vite 5 (for Web/PWA)
- **Data Persistence**: Browser `localStorage` with in-memory caching layers
- **State Management**: Distributed state using React Hooks and Context API

## Component Architecture

The app follows a typical React component structure, with a focus on reusability and performance:

- **Components (`src/components/`)**: Pure UI components and complex reusable blocks (e.g., `Flashcard.tsx`, `CommonHeader.tsx`).
- **Pages (`src/pages/`)**: Top-level route components that manage page-specific logic and state.
- **Contexts (`src/context/`)**: Global application state (Theme, Timer) shared across different sections.
- **Hooks (`src/hooks/`)**: Custom hooks that encapsulate logic (e.g., `useTTS` for audio playback, `useStreak` for daily progress).

## Data Management & Flow

The application is designed to be fully functional offline, meaning all core data is bundled with the app.

### Static Data (`src/data/`)

Vocabulary and lesson definitions are stored as static TypeScript objects in `src/data/lessons.ts`. This data is pre-processed at the module level (e.g., flattening all cards into `allCards`) to ensure O(1) or O(N) access without redundant computations during runtime.

### Persistence Logic (`src/utils/`)

User-specific data (SRS progress, bookmarks, settings, streaks) is persisted in `localStorage`. To optimize performance:
- **In-memory Caching**: Modules like `src/utils/srs.ts` and `src/utils/bookmarks.ts` maintain an in-memory cache of the data. This avoids repeated expensive `JSON.parse` operations on every read.
- **Debounced Writes**: Data writes to `localStorage` are debounced (e.g., a 2-second delay in SRS) to minimize the impact on UI thread responsiveness.
- **Mathematical Shortcuts**: Calculations (like counting due cards) are optimized to avoid iterating over the entire dataset whenever possible.

## Routing

The app uses `react-router-dom` v5 integrated with Ionic (`IonReactHashRouter`). A hash-based routing strategy is employed to ensure maximum compatibility across web servers and native mobile platforms without complex server configuration.

## Audio & Text-to-Speech (TTS)

The audio system is centralized in `src/utils/tts.ts` and utilized via the `useTTS` hook. It uses a prioritized fallback chain:
1. **Local Audio Files**: Pre-bundled static assets.
2. **Cloud-hosted Audio**: Optimized MP3s from a dedicated storage bucket.
3. **Google Cloud TTS (Serverless)**: Dynamic generation via a custom Cloud Run endpoint.
4. **Web Speech API**: Local synthesis as a last-resort fallback.

All dynamic audio content is cached in an in-memory `Map` to prevent redundant network requests within a single session.
