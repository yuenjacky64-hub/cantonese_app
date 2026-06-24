# Google Cloud TTS Server Setup Guide

## Prerequisites

- Node.js 20 or higher
- Google Cloud CLI (`gcloud`)
- A Google Cloud project with billing enabled

## Step 1: Install & Authenticate gcloud

```bash
# Install gcloud (if not installed):
# https://cloud.google.com/sdk/docs/install

# Initialize:
gcloud init
# -> Login with your Google account
# -> Select or create a project

# Or if already installed, just login:
gcloud auth login --brief --no-launch-browser
# -> Answer Y when prompted
# -> Open the URL in a browser
# -> Sign in with your Google account
# -> Paste the verification code back in the terminal
```

## Step 2: Enable Required Services

```bash
gcloud services enable \
  texttospeech.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com
```

If the VM's default service account lacks permissions, grant it the needed roles:

```bash
PROJECT="YOUR_PROJECT_ID"
SA="YOUR_COMPUTE_SA@developer.gserviceaccount.com"
gcloud projects add-iam-policy-binding $PROJECT \
  --member="serviceAccount:$SA" \
  --role="roles/cloudbuild.builds.builder"
gcloud projects add-iam-policy-binding $PROJECT \
  --member="serviceAccount:$SA" \
  --role="roles/storage.objectViewer"
gcloud projects add-iam-policy-binding $PROJECT \
  --member="serviceAccount:$SA" \
  --role="roles/artifactregistry.writer"
```

## Step 3: Create Project Files

### `package.json`

```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "@google-cloud/text-to-speech": "^5.0.0"
  }
}
```

### `index.js`

```javascript
import express from "express";
import cors from "cors";
import textToSpeech from "@google-cloud/text-to-speech";

const app = express();
app.use(cors());
app.use(express.json());

const client = new textToSpeech.TextToSpeechClient();

app.post("/tts", async (req, res) => {
  try {
    const { text, languageCode = "yue-HK", voiceName } = req.body;

    const request = {
      input: { text },
      voice: {
        languageCode,
        name: voiceName || "yue-HK-Chirp3-HD-Achernar",
      },
      audioConfig: {
        audioEncoding: "MP3",
      },
    };

    const [response] = await client.synthesizeSpeech(request);

    res.json({
      audioContent: response.audioContent.toString("base64"),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "TTS failed" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`TTS server running on port ${PORT}`);
});
```

### `Dockerfile`

```dockerfile
FROM node:20-slim

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

COPY . .

CMD ["npm", "start"]
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Deploy to Cloud Run

```bash
gcloud run deploy tts-server \
  --source . \
  --region asia-east1 \
  --allow-unauthenticated
```

After deployment you'll get a URL like: `https://tts-server-xxxxx-REGION.run.app`

## Step 6: Test the API

```bash
curl -X POST "https://tts-server-446058742621.asia-east1.run.app/tts" \
  -H "Content-Type: application/json" \
  -d '{"text":"你好！","languageCode":"yue-HK","voiceName":"yue-HK-Chirp3-HD-Achernar"}'
```

Or open `tts-test.html` in a browser.

---

## Important Notes

### Google Cloud VM Service Account Scopes

If running `gcloud` from a GCE VM, the default service account may have **limited OAuth scopes** that prevent deploying or enabling APIs. Fix by:

1. `gcloud auth login` with a user account that has Owner/Editor role
2. If the build still fails, grant IAM roles to the compute SA (see Step 2)

### Available Cantonese (yue-HK) Voices

| Type | Voice Names |
|------|------------|
| **Chirp3 HD (Premium)** | `yue-HK-Chirp3-HD-Achernar` (F), `yue-HK-Chirp3-HD-Achird` (M), `yue-HK-Chirp3-HD-Algenib` (M), `yue-HK-Chirp3-HD-Algieba` (M), and 26 more |
| **Standard** | `yue-HK-Standard-A` (F), `yue-HK-Standard-B` (M), `yue-HK-Standard-C` (F), `yue-HK-Standard-D` (M) |

### Chirp3 HD Voice Limitations

- Does **not** support SSML input
- Does **not** support `speakingRate` and `pitch` parameters
- Does **not** support A-Law audio encoding
- Available in `global`, `eu`, `us` endpoints only

### Request Format

```json
{
  "text": "Text to convert to speech",
  "languageCode": "yue-HK",
  "voiceName": "yue-HK-Chirp3-HD-Achernar"
}
```

- `languageCode` and `voiceName` are optional (defaults are set server-side)
- Response returns `{ "audioContent": "<base64-encoded-mp3>" }`
- Decode the base64 to get the MP3 audio file

### Redeploy After Changes

After modifying `index.js`, redeploy:

```bash
gcloud run deploy tts-server --source . --region asia-east1 --allow-unauthenticated
```
