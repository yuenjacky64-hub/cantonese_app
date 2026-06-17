# Cantonese Learning App

A mobile-friendly application for learning Cantonese, built with Ionic, React, and Capacitor. This app helps users learn Cantonese vocabulary and phrases through structured lessons, flashcard reviews, and interactive games.

## Features

- **Categorized Lessons**: Learn Cantonese words and phrases categorized by topics (Greetings, Numbers, Food, etc.).
  <!-- To add a new lesson, modify src/data/lessons.ts and update translations in src/i18n/locales/ -->
- **Flashcards**: Interactive flashcards with English, Traditional Chinese, and Simplified Chinese translations.
- **Interactive Games**:
  - **Multiple Choice Quiz**: Test your Cantonese-to-translation mapping.
  - **Memory Match**: Match Cantonese words with their translations.
  - **Spell Challenge**: Practice spelling Cantonese words.
  - **Word Scramble**: Unscramble letters to form the correct Cantonese word.
  - **Emoji Guess**: Guess the Cantonese word from emojis.
  - **Falling Words**: Catch the correct translation for falling Cantonese words.
  - **Listening Quiz**: Test your listening comprehension with native audio.
  - **Sentence Builder**: Build sentences using provided words to match translations.
  - **True/False**: Verify whether the displayed translation matches the Cantonese word/phrase.
  <!-- The games are located in src/pages/. They share utility functions from src/utils/array.ts to avoid code duplication. -->
- **Review Mode**: Practice what you've learned using a Spaced Repetition System (SRS) to optimize retention.
- **Bookmark System**: Save specific cards to your personal list for focused study.
- **Hong Kong News Feed**: View the latest news headlines from the Hong Kong Free Press directly on the dashboard.
- **Study Timer & Daily Streaks**: Track your daily learning progress with a built-in study timer and maintain your learning streak. Streaks are calculated using the user's local timezone (not UTC) to prevent boundary mismatch errors.
- **Text-to-Speech (TTS)**: Listen to native pronunciations with a multi-layered fallback system (Local audio, Google Cloud TTS Serverless, Google Translate TTS with `yue` locale, and Web Speech API with Cantonese voice check) and audio caching.
- **Customization**:
  - **Themes**: Choose from various color themes (Teal, Blue, etc.).
  - **Text Size**: Adjust the font size for better readability.
  - **Dark Mode**: Automatically adapts to system theme or user preference.
- **PWA Support**: Installable as a Progressive Web App (PWA) for offline access and native-like experience.
- **Multilingual Support**: Interface available in English, Traditional Chinese, and Simplified Chinese.
- **Cross-Platform**: Works on Web, Android, and iOS via Capacitor.

## Tech Stack

- **Framework**: [Ionic Framework v8](https://ionicframework.com/) with [React 18](https://reactjs.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/) with [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- **Mobile Runtime**: [Capacitor 6](https://capacitorjs.com/)
- **State Management**: React Hooks & Context API
- **Routing**: React Router v5 (with IonReactHashRouter)
- **Internationalization**: i18next & react-i18next
- **Testing**: Vitest (Unit), Cypress (E2E)
- **Scripting/Tools**: Bun (for benchmarks and fast scripting)

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or [Bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cantonese-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Running the App

#### Development Server
To start the development server with hot reload:
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.

#### Build
To build the project for production:
```bash
npm run build
```

#### Preview
To preview the production build locally:
```bash
npm run preview
```

## Available Scripts
<!-- Note: Use npx vitest run instead of npm run test.unit for CI/automated testing as the latter starts in watch mode. -->

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server using Vite. |
| `npm run build` | Builds the app for production. Includes TypeScript validation (`tsc`). |
| `npm run preview` | Previews the production build locally. |
| `npm run test.unit` | Runs unit tests using Vitest. |
| `npm run test.e2e` | Runs end-to-end tests using Cypress. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## Project Structure
<!-- Remember to keep logic separated from UI components. Use custom hooks for complex state. -->

```
src/
├── components/      # Reusable UI components (Flashcard, Header, etc.)
├── context/         # React Contexts (Timer, Theme)
├── data/            # Static data (Lessons, I18n)
├── hooks/           # Custom React Hooks (useTTS, useStreak)
├── pages/           # Application pages (Home, Lesson, Games)
├── types/           # TypeScript type definitions
├── utils/           # Utility functions (SRS, Bookmarks, Array helpers)
└── theme/           # Global styles and CSS variables
benchmarks/          # Performance benchmark scripts
doc/                 # Detailed documentation
```

## Documentation

For more detailed information about the app's internals, please refer to the following documents:

- [Architecture Overview](doc/ARCHITECTURE.md)
- [Spaced Repetition System (SRS)](doc/SRS.md)
- [Interactive Games](doc/GAMES.md)
- [Text-to-Speech (TTS) System](doc/TTS.md)
- [Performance & Optimizations](doc/PERFORMANCE.md)

## Performance & Optimizations
<!-- Ensure you do not add render-blocking resources. Use the wsrv.nl proxy for external images. -->

The application is highly optimized for performance, especially on mobile devices:
- **Module-level Data Pre-computation**: Vocabulary lists and indices are pre-computed at the module level to avoid redundant calculations during rendering.
- **O(count) Sampling**: Randomized question and option generation uses efficient algorithms instead of full array shuffles.
- **Caching Strategies**: SRS stats, TTS audio, and bookmarks are cached in memory with automatic invalidation.
- **Lazy Initialization**: Resource-heavy operations are deferred until needed.
- **Mathematical Shortcuts**: Calculations (like SRS due counts) are optimized using mathematical formulas to avoid large array traversals.

Detailed benchmarks can be found in the `benchmarks/` directory and are documented in [PERFORMANCE.md](doc/PERFORMANCE.md).
