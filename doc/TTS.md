# Text-to-Speech (TTS) System

The Cantonese Learning App provides a comprehensive Text-to-Speech (TTS) system to help users learn correct pronunciations. The system is designed to be highly reliable and performant, utilizing a multi-layered fallback chain and an efficient caching mechanism.

## Core Components

- **Utilities (`src/utils/tts.ts`)**: Centralized module for fetching and caching audio content.
- **Hook (`src/hooks/useTTS.ts`)**: A custom React hook that exposes simple methods for playing audio while managing loading and error states.
- **Flashcard Component (`src/components/Flashcard.tsx`)**: The primary interface for users to interact with TTS during learning and review sessions.

## Fallback Chain

The app implements a prioritized fallback mechanism to ensure audio is always available, even if some services are down or the device is offline:

1. **Local Audio Files**: The system first checks for pre-bundled static MP3 files (e.g., for common phrases or high-frequency words).
2. **Cloud Storage**: If no local file is found, the system attempts to fetch an optimized MP3 from a dedicated Google Cloud Storage bucket.
3. **Google Cloud TTS (Serverless)**: If no pre-recorded file exists, the app makes a request to a custom, serverless Cloud Run endpoint that generates audio on-the-fly using Google Cloud's high-quality Text-to-Speech API.
4. **Google Translate TTS**: As a lightweight alternative, the app can fall back to the public Google Translate TTS endpoint.
5. **Web Speech API**: As a final resort, the system utilizes the device's native `SpeechSynthesis` capabilities (if available for the Cantonese language).

## Performance and Caching

To minimize network traffic and eliminate UI stutter, the TTS system includes several optimizations:

### In-memory Caching
Every dynamically generated audio file is cached in a module-level `Map` within `src/utils/tts.ts`. The key is a hash of the text, language, voice, and speaking rate. Subsequent requests for the same audio within the same session are served instantly from memory, avoiding redundant network calls.

### Audio Instance Reuse
The `Flashcard` component manages its `Audio` objects carefully, pausing and resetting existing instances before starting new ones. This prevents memory leaks and ensures that multiple audio tracks don't play simultaneously.

### AbortController Integration
All asynchronous audio operations (fetching and playing) are linked to an `AbortController`. This ensures that if a user navigates away or starts a new track, any pending network requests or playback operations are immediately canceled, keeping the UI responsive.

## Setting Up the Google Cloud TTS Server

To maintain the dynamic TTS generation, you can deploy a serverless endpoint using Google Cloud Run. Detailed instructions and the core logic (Node.js/Express) are provided in `how_to_setup_google_serverless_server_for_tts.txt` in the project root.

### Summary of Deployment Steps:
1. Enable `texttospeech.googleapis.com` and `run.googleapis.com` in your Google Cloud Project.
2. Create a simple Node.js server using `@google-cloud/text-to-speech`.
3. Dockerize the server.
4. Deploy to Cloud Run using `gcloud run deploy`.
5. Update the TTS endpoint URL in your app's environment configuration.
