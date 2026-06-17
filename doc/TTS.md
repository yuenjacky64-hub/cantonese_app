# Text-to-Speech (TTS) System

The Cantonese Learning App provides a comprehensive Text-to-Speech (TTS) system to help users learn correct pronunciations. The system is designed to be highly reliable and performant, utilizing a multi-layered fallback chain and an efficient caching mechanism.

## Core Components

- **Utilities (`src/utils/tts.ts`)**: Centralized module for fetching and caching audio content.
- **Hook (`src/hooks/useTTS.ts`)**: A custom React hook that exposes simple methods for playing audio while managing loading and error states.
- **Flashcard Component (`src/components/Flashcard.tsx`)**: The primary interface for users to interact with TTS during learning and review sessions.

## Fallback Chain

The app implements a prioritized fallback mechanism to ensure audio is always available, even if some services are down or the device is offline:

1. **Local Audio Files**: The system first checks for pre-bundled static MP3 files (e.g., for common phrases or high-frequency words) under the app's base asset directory.
2. **Google Cloud TTS (Serverless)**: If no pre-recorded file exists, the app makes a request to a custom, serverless Cloud Run endpoint that generates audio on-the-fly using Google Cloud's high-quality Text-to-Speech API.
3. **Google Translate TTS**: As a lightweight online fallback, the system fetches Cantonese synthesis using the public Translate TTS endpoint, passing the Cantonese-specific `tl=yue` parameter (rather than Mandarin `zh-TW`).
4. **Web Speech API**: As a final resort, the system utilizes the device's native `SpeechSynthesis` capabilities. To prevent incorrect Mandarin synthesis, this fallback is skipped unless a native Cantonese voice (e.g., `yue-HK`, `zh-HK`, or a voice name containing "Cantonese" or "yue") is actively installed on the user's system.

## Performance and Caching

To minimize network traffic and eliminate UI stutter, the TTS system includes several optimizations:

### In-memory Caching
Every dynamically generated audio file is cached in a module-level `Map` within `src/utils/tts.ts`. The key is a hash of the text, language, voice, and speaking rate. Subsequent requests for the same audio within the same session are served instantly from memory, avoiding redundant network calls.

### Audio Instance Reuse
To prevent memory leaks and ensure multiple audio files do not overlap, playbacks use a shared mutable reference (`audioRef`) to control a single `HTMLAudioElement` instance. Before playing any new track, the current audio is explicitly paused and its source reset.

### Synchronous Cancellation & Lifecycle Handling
Playback methods and custom hooks track the execution via React refs. When the user navigates away, changes the current card/question, or triggers a new audio play, any active playback is instantly halted (`stop()` function) and the pending promise is resolved cleanly, preventing unresolved promise traps.

## Setting Up the Google Cloud TTS Server

To maintain the dynamic TTS generation, you can deploy a serverless endpoint using Google Cloud Run. Detailed instructions and the core logic (Node.js/Express) are provided in `how_to_setup_google_serverless_server_for_tts.txt` in the project root.

### Summary of Deployment Steps:
1. Enable `texttospeech.googleapis.com` and `run.googleapis.com` in your Google Cloud Project.
2. Create a simple Node.js server using `@google-cloud/text-to-speech`.
3. Dockerize the server.
4. Deploy to Cloud Run using `gcloud run deploy`.
5. Update the TTS endpoint URL in your app's environment configuration.
