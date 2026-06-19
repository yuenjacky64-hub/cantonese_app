# Interactive Games

The Cantonese Learning App provides a variety of interactive games to help users reinforce their knowledge of vocabulary and phrases in an engaging way. All games are accessible from the main dashboard and are located in `src/pages/`.

## Game Mechanics

All games utilize the centralized vocabulary data in `src/data/lessons.ts` and share common design principles:
- **Randomization**: Questions and options are randomly selected for every game session.
- **Immediate Feedback**: Users receive instant visual and auditory feedback on their answers.
- **Score Tracking**: Progress is tracked during the session to keep users motivated.

## Available Games

### 1. Memory Match (`MemoryMatch.tsx`)
A classic matching game where users must pair Cantonese words with their English translations.
- **How it works**: A set of cards is displayed face down. Users flip two cards at a time, trying to find a matching Cantonese-English pair.
- **Goal**: Clear all pairs in the fewest moves or shortest time possible.

### 2. Spell Challenge (`SpellChallenge.tsx`)
An exercise in spelling Cantonese words correctly.
- **How it works**: The app displays an English translation or plays the audio of a Cantonese word. Users must type the correct Cantonese spelling.
- **Goal**: Correctly spell all given words in the session.

### 3. Word Scramble (`WordScramble.tsx`)
A game that tests recognition of Cantonese word structure.
- **How it works**: Letters of a Cantonese word are shuffled. Users must re-arrange them into the correct order.
- **Goal**: Unscramble all words within the allotted time or session.

### 4. Emoji Guess (`EmojiGuess.tsx`)
A fun, visual way to learn vocabulary.
- **How it works**: One or more emojis representing a Cantonese word or concept are shown. Users select the correct Cantonese word from multiple choices.
- **Goal**: Correctly identify the word based on the emoji clue.

### 5. Falling Words (`FallingWords.tsx`)
A fast-paced arcade-style game.
- **How it works**: Cantonese words fall from the top of the screen. Users must select the correct English translation from a list of options at the bottom before the word reaches the end.
- **Goal**: Catch as many translations as possible without letting words "fall" past the target.

### 6. Listening Quiz (`ListeningQuiz.tsx`)
An exercise for improving auditory comprehension.
- **How it works**: The app plays an audio clip of a Cantonese word or phrase. Users must choose the correct English or Cantonese translation from a multiple-choice list.
- **Goal**: Build strong listening skills for native-like understanding.

### 7. Sentence Builder (`SentenceBuilder.tsx`)
A game to practice constructing Cantonese sentences.
- **How it works**: The app presents an English translation. Users must select the correct Cantonese words from a set of scrambled word tiles to construct the corresponding Cantonese sentence.
- **Goal**: Successfully build the correct Cantonese sentence by arranging the provided words.

### 8. Multiple Choice Quiz (`Game.tsx`)
A classic multiple-choice quiz designed to test overall translation accuracy.
- **How it works**: The app displays a Cantonese word or phrase, and the user must choose the correct English translation from four options.
- **Goal**: Select the correct translation and build a high answer streak.

### 9. True/False Quiz (`TrueFalse.tsx`)
A fast-paced translation verification game.
- **How it works**: The app displays a Cantonese word or phrase and a translation. The user must decide if the translation is correct (True) or incorrect (False).
- **Goal**: Build and maintain the best streak of correct verification answers.

## Performance Optimizations

To ensure smooth gameplay, especially in games with many moving parts (like Falling Words) or complex data needs:

### Centralized Shared Utilities
To avoid code duplication, games import shared utility functions (such as `shuffleArray` and `getRandomElements`) from a centralized location (`src/utils/array.ts`). This keeps game components clean and focused purely on UI rendering and state management.

### Efficient Sampling
Games use a custom `getRandomElements` utility in `src/utils/array.ts` to select questions and generate "distractor" options. This algorithm is O(count) instead of O(N), meaning it performs at a constant speed regardless of how many thousands of words are in the database.

### Memoized Indices
The `WordScramble` game, for example, filters the entire vocabulary for words of specific lengths (3 to 12 characters) only once at the module level. This prevents the game from stuttering when starting a new session.

### Asset Caching
The `ListeningQuiz` caches the results of its initial audio-mapping data fetch (sourced from `audio-map.json` — see [Audio Generation](AUDIO_GENERATION.md)), ensuring that navigating back and forth from the game doesn't result in repeated network calls.
