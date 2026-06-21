# Audio Generation

Before building or deploying the app, you must generate the static audio files. Without these files, the app's first audio fallback tier (local MP3s) will be empty, forcing every audio play to hit the Google Cloud TTS API — increasing latency and reliance on network connectivity.

## Prerequisites

- A running Google Cloud TTS serverless endpoint (see [TTS_SERVER_SETUP.md](TTS_SERVER_SETUP.md) or [TTS.md](TTS.md) for setup instructions).
- The endpoint URL configured in `scripts/generate-audio.mjs` (default: `https://tts-server-446058742621.asia-east1.run.app/tts`).

## Generating Audio Files

Run the script from the project root:

```bash
node scripts/generate-audio.mjs
```

This script:

1. Reads all Cantonese words/phrases from `src/data/lessons.ts`.
2. For each unique word, sends a request to the TTS server to generate:
   - **Normal speed** (1.0x) — saved as `{sanitized_name}.mp3`
   - **Slow speed** (0.6x) — saved as `{sanitized_name}_slow.mp3`
3. Writes all MP3 files to `public/audio/`.
4. Generates `public/audio/audio-map.json` — a mapping of words to their audio file paths used by the app at runtime.

### Output

```
public/audio/
├── audio-map.json
├── nei5_hou2.mp3
├── nei5_hou2_slow.mp3
├── mm4_goi1.mp3
├── mm4_goi1_slow.mp3
└── ...
```

### Skipping Existing Files

The script skips files that already exist. To regenerate a specific file, delete it from `public/audio/` and re-run the script.

## When to Run

Run this script whenever:

- You modify `src/data/lessons.ts` (adding, removing, or changing words/phrases).
- You are about to build the app for production (`npm run build`).
- You deploy the app to a new environment (web server, Capacitor build, etc.).

## Deployment Checklist

Before deploying, ensure:

- [ ] Audio files are generated (`node scripts/generate-audio.mjs`)
- [ ] `public/audio/` contains the expected MP3 files
- [ ] `public/audio/audio-map.json` is up to date
- [ ] The app builds successfully (`npm run build`)
