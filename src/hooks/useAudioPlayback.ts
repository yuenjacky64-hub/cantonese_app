import { useEffect, useRef, useState } from 'react';
import { fetchTTS } from '../utils/tts';

/**
 * Flashcard audio playback hook.
 *
 * Encapsulates the 4-tier fallback chain used by the Flashcard component:
 *   1. Local pre-generated MP3s in /public/audio/ (offline-friendly)
 *   2. Google Cloud TTS serverless endpoint (high quality, online)
 *   3. Google Translate TTS (unofficial; better Cantonese pronunciation
 *      than most browsers' built-in voices)
 *   4. Web Speech API (only if a real Cantonese voice is installed —
 *      otherwise the OS silently substitutes Mandarin, which is worse
 *      than no audio at all)
 *
 * Interruption: clicking a different button while audio is playing
 * cancels the in-flight promise and starts the new playback. Tracked
 * via `currentExecutionIdRef` so a late finally{} from a cancelled
 * play doesn't clobber the new request's spinner state.
 */
export interface UseAudioPlaybackReturn {
  isPlaying: boolean;
  playAudio: (event: React.MouseEvent, text: string, lang: string) => Promise<void>;
  playSlowAudio: (event: React.MouseEvent, text: string) => Promise<void>;
}

const sanitizeFilename = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[?!.,;:'"()/\\]/g, '')
    .replace(/\s+/g, '_')
    .trim();

export const useAudioPlayback = (): UseAudioPlaybackReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentAudioResolver = useRef<(() => void) | null>(null);
  const currentExecutionIdRef = useRef<number>(0);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (currentAudioResolver.current) {
        currentAudioResolver.current();
        currentAudioResolver.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  const getAudioInstance = (): HTMLAudioElement => {
    if (!audioRef.current) {
      const audio = new Audio();
      // Disable referrer header to prevent Google Translate from blocking
      // audio playback.
      (audio as HTMLAudioElement & { referrerPolicy: string }).referrerPolicy = 'no-referrer';
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const playAudioFromSrc = (src: string, playbackRate = 1.0): Promise<void> => {
    if (currentAudioResolver.current) {
      currentAudioResolver.current();
      currentAudioResolver.current = null;
    }

    return new Promise<void>((resolve, reject) => {
      currentAudioResolver.current = resolve;

      const audio = getAudioInstance();

      audio.onended = null;
      audio.onerror = null;
      audio.oncanplaythrough = null;

      audio.src = src;
      audio.playbackRate = playbackRate;

      audio.onended = () => {
        if (currentAudioResolver.current === resolve) {
          currentAudioResolver.current = null;
          resolve();
        }
      };

      audio.onerror = () => {
        if (currentAudioResolver.current === resolve) {
          currentAudioResolver.current = null;
          reject('Audio playback failed');
        }
      };

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (currentAudioResolver.current === resolve) {
            currentAudioResolver.current = null;
            reject(error);
          }
        });
      }
    });
  };

  // Local files sometimes need `oncanplaythrough` before play() is safe.
  const playLocalAudio = (src: string, playbackRate = 1.0): Promise<void> => {
    if (currentAudioResolver.current) {
      currentAudioResolver.current();
      currentAudioResolver.current = null;
    }

    return new Promise<void>((resolve, reject) => {
      currentAudioResolver.current = resolve;

      const audio = getAudioInstance();

      audio.onended = null;
      audio.onerror = null;
      audio.oncanplaythrough = null;

      audio.src = src;
      audio.playbackRate = playbackRate;

      audio.onended = () => {
        if (currentAudioResolver.current === resolve) {
          currentAudioResolver.current = null;
          resolve();
        }
      };

      audio.onerror = () => {
        if (currentAudioResolver.current === resolve) {
          currentAudioResolver.current = null;
          reject('Local audio not found');
        }
      };

      audio.oncanplaythrough = () => {
        audio.play().catch((err) => {
          if (currentAudioResolver.current === resolve) {
            currentAudioResolver.current = null;
            reject(err);
          }
        });
      };

      audio.load();
    });
  };

  const playAudio = async (event: React.MouseEvent, text: string, lang: string) => {
    event.stopPropagation();

    const executionId = ++currentExecutionIdRef.current;
    setIsPlaying(true);

    try {
      // 1. Local pre-generated MP3 (offline)
      if (lang === 'yue-HK') {
        try {
          const filename = sanitizeFilename(text);
          const basePath = import.meta.env.BASE_URL || '/';
          const audioPath = `${basePath}audio/${filename}.mp3`;
          await playLocalAudio(audioPath);
          return;
        } catch (e) {
          if (e !== 'Interrupted') {
            console.warn('Local audio not found, trying online TTS', e);
          }
        }

        // 2. Google Cloud TTS serverless
        try {
          const audioContent = await fetchTTS({
            text,
            languageCode: 'yue-HK',
            voiceName: 'yue-HK-Standard-A',
          });
          if (audioContent) {
            await playAudioFromSrc(`data:audio/mp3;base64,${audioContent}`);
            return;
          }
        } catch (e) {
          console.warn('Google Cloud TTS Serverless failed, falling back', e);
        }
      }

      // 3. Google Translate TTS (unofficial). For Cantonese use `yue` —
      // `zh-TW` returns Mandarin (Taiwan), not Cantonese.
      let googleLang = lang;
      if (lang === 'yue-HK') googleLang = 'yue';
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${googleLang}&q=${encodeURIComponent(text)}`;
      await playAudioFromSrc(audioUrl);
    } catch (error) {
      console.warn('Google TTS failed, falling back to Web Speech API', error);

      // 4. Web Speech API — only if a real Cantonese voice exists.
      // Otherwise the browser silently substitutes Mandarin.
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        if (lang === 'yue-HK') {
          const voices = window.speechSynthesis.getVoices();
          const nativeVoice = voices.find((v) =>
            v.lang === 'yue-HK' || v.lang === 'zh-HK' || /cantonese|yue/i.test(v.name)
          );
          if (!nativeVoice) {
            console.warn('No Cantonese voice installed on this device — skipping Web Speech fallback to avoid Mandarin substitution.');
            return;
          }
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = nativeVoice;
          utterance.lang = nativeVoice.lang;
          utterance.rate = 0.9;
          await new Promise<void>((resolve) => {
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
          });
        } else {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang;
          utterance.rate = 0.9;
          await new Promise<void>((resolve) => {
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
          });
        }
      }
    } finally {
      if (currentExecutionIdRef.current === executionId) {
        setIsPlaying(false);
      }
    }
  };

  const playSlowAudio = async (event: React.MouseEvent, text: string) => {
    event.stopPropagation();

    const executionId = ++currentExecutionIdRef.current;
    setIsPlaying(true);

    try {
      // The TTS server currently ignores `speakingRate`, so slow playback
      // is achieved client-side via HTMLAudioElement.playbackRate. Same
      // audio sources as the normal path; only the rate differs.
      const SLOW_RATE = 0.6;

      // 1. Local pre-generated normal MP3 played at 0.6x
      try {
        const filename = sanitizeFilename(text);
        const basePath = import.meta.env.BASE_URL || '/';
        const audioPath = `${basePath}audio/${filename}.mp3`;
        await playLocalAudio(audioPath, SLOW_RATE);
        return;
      } catch (e) {
        if (e !== 'Interrupted') {
          console.warn('Local audio not found, trying online TTS', e);
        }
      }

      // 2. Cloud TTS played at 0.6x
      try {
        const audioContent = await fetchTTS({
          text,
          languageCode: 'yue-HK',
          voiceName: 'yue-HK-Standard-A',
        });
        if (audioContent) {
          await playAudioFromSrc(`data:audio/mp3;base64,${audioContent}`, SLOW_RATE);
          return;
        }
      } catch (e) {
        console.warn('Google Cloud TTS Serverless failed, falling back', e);
      }

      // 3. Google Translate TTS doesn't support rate control; skip to
      // Web Speech which does.
      throw new Error('Fallback to Web Speech API');
    } catch (error) {
      console.warn('Slow TTS failed, falling back to Web Speech API', error);

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const voices = window.speechSynthesis.getVoices();
        const nativeVoice = voices.find((v) =>
          v.lang === 'yue-HK' || v.lang === 'zh-HK' || /cantonese|yue/i.test(v.name)
        );
        if (!nativeVoice) {
          console.warn('No Cantonese voice installed on this device — skipping Web Speech fallback to avoid Mandarin substitution.');
          return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = nativeVoice;
        utterance.lang = nativeVoice.lang;
        utterance.rate = 0.6;
        await new Promise<void>((resolve) => {
          utterance.onend = () => resolve();
          utterance.onerror = () => resolve();
          window.speechSynthesis.speak(utterance);
        });
      }
    } finally {
      if (currentExecutionIdRef.current === executionId) {
        setIsPlaying(false);
      }
    }
  };

  return { isPlaying, playAudio, playSlowAudio };
};

export default useAudioPlayback;
