
const TTS_API_URL = 'https://tts-server-446058742621.asia-east1.run.app/tts';

interface TTSOptions {
    text: string;
    languageCode?: string;
    voiceName?: string;
    speakingRate?: number;
}

// In-memory cache for audio content (base64)
const ttsCache = new Map<string, string>();

/**
 * Fetches TTS audio content from the API or cache.
 * Returns the base64 encoded audio content.
 */
export const fetchTTS = async (options: TTSOptions): Promise<string | null> => {
    const {
        text,
        languageCode = 'fil-PH',
        voiceName = 'fil-PH-Standard-A',
        speakingRate = 1.0,
    } = options;

    const cacheKey = JSON.stringify({ text, languageCode, voiceName, speakingRate });

    if (ttsCache.has(cacheKey)) {
        return ttsCache.get(cacheKey) || null;
    }

    try {
        const response = await fetch(TTS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text,
                languageCode,
                voiceName,
                speakingRate,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.audioContent) {
                ttsCache.set(cacheKey, data.audioContent);
                return data.audioContent;
            }
        }
    } catch (error) {
        console.error('Cloud TTS fetch failed:', error);
    }

    return null;
};
