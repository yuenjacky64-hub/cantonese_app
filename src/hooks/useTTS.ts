import { useState, useCallback, useEffect, useRef } from 'react';
import { fetchTTS } from '../utils/tts';

interface UseTTSOptions {
    languageCode?: string;
    voiceName?: string;
}

interface UseTTSReturn {
    speak: (text: string) => Promise<void>;
    stop: () => void;
    isLoading: boolean;
    isPlaying: boolean;
    error: string | null;
}

export const useTTS = (options?: UseTTSOptions): UseTTSReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const languageCode = options?.languageCode || 'yue-HK';
    const voiceName = options?.voiceName || 'yue-HK-Standard-A';

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
            audioRef.current = null;
        }
        setIsPlaying(false);
    }, []);

    const speak = useCallback(async (text: string) => {
        if (!text.trim()) return;

        // Cancel any in-flight playback before starting a new one
        stop();

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
                audioRef.current = audio;
                audio.onended = () => {
                    if (audioRef.current === audio) audioRef.current = null;
                    setIsPlaying(false);
                };
                audio.onerror = () => {
                    if (audioRef.current === audio) audioRef.current = null;
                    setIsPlaying(false);
                };
                setIsPlaying(true);
                await audio.play();
            } else {
                throw new Error('Failed to fetch audio content');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to play audio';
            setError(errorMessage);
            setIsPlaying(false);
            console.error('TTS Error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [languageCode, voiceName, stop]);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return { speak, stop, isLoading, isPlaying, error };
};

export default useTTS;
