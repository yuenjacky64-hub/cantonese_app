import { useState, useCallback } from 'react';
import { fetchTTS } from '../utils/tts';

interface UseTTSOptions {
    languageCode?: string;
    voiceName?: string;
}

interface UseTTSReturn {
    speak: (text: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export const useTTS = (options?: UseTTSOptions): UseTTSReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const languageCode = options?.languageCode || 'yue-HK';
    const voiceName = options?.voiceName || 'yue-HK-Standard-A';

    const speak = useCallback(async (text: string) => {
        if (!text.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const audioContent = await fetchTTS({
                text,
                languageCode,
                voiceName,
            });

            if (audioContent) {
                const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
                await audio.play();
            } else {
                throw new Error('Failed to fetch audio content');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to play audio';
            setError(errorMessage);
            console.error('TTS Error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [languageCode, voiceName]);

    return { speak, isLoading, error };
};

export default useTTS;
