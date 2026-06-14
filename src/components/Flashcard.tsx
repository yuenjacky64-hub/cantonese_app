import React, { useState, useEffect, useRef } from 'react';
import { IonIcon, IonButton, IonSpinner } from '@ionic/react';
import { volumeHighOutline, volumeLowOutline, bookmarkOutline, bookmark } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';
import { fetchTTS } from '../utils/tts';
import './Flashcard.css';

interface Example {
  cantonese: string;
  english: string;
  zhTW: string;
  zhCN: string;
  // Make example compatible with both FlashcardProps and the Example interface
}

interface FlashcardProps {
  id: string;
  cantonese: string;
  english: string;
  zhTW?: string;
  zhCN?: string;
  example?: Example;
}

/**
 * Flashcard Component
 * Displays a card with a front (Cantonese) and back (Translation + Example).
 * Supports flipping animation and text-to-speech audio playback.
 */
const Flashcard: React.FC<FlashcardProps> = ({ id, cantonese, english, zhTW, zhCN, example }) => {
  const { t, i18n } = useTranslation();

  // State to track if the card is currently flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // State to track if audio is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  // State to track if the card is bookmarked
  const [isBookmarkedState, setIsBookmarkedState] = useState(false);

  // Ref to hold the single Audio instance
  const audioRef = useRef<HTMLAudioElement | null>(null);

// Ref to hold the resolver of the currently playing promise
  const currentAudioResolver = useRef<(() => void) | null>(null);

  // Ref to track the current execution ID of play requests to prevent race conditions
  const currentExecutionIdRef = useRef<number>(0);

  useEffect(() => {
    setIsBookmarkedState(isBookmarked(id));
  }, [id]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      // If there's a pending promise, resolve it to prevent hanging
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

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = toggleBookmark(id);
    setIsBookmarkedState(newState);
  };

  /**
   * Determines the appropriate translation and language code based on the current app language.
   * Defaults to English (en-US).
   */
  const getTranslation = () => {
    switch (i18n.language) {
      case 'zh-TW':
        return { text: zhTW || english, lang: 'zh-TW', example: example?.zhTW || example?.english };
      case 'zh-CN':
        return { text: zhCN || english, lang: 'zh-CN', example: example?.zhCN || example?.english };
      default:
        return { text: english, lang: 'en-US', example: example?.english };
    }
  };

  const translation = getTranslation();

  /**
   * Helper to get or create the Audio instance
   */
  const getAudioInstance = (): HTMLAudioElement => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    return audioRef.current;
  };

  /**
   * Helper to play audio from a source URL using the shared Audio instance
   */
  const playAudioFromSrc = (src: string): Promise<void> => {
    // If there is an existing resolver (meaning audio is playing), resolve it immediately
    // to "cancel" the previous promise wait.
    if (currentAudioResolver.current) {
        currentAudioResolver.current();
        currentAudioResolver.current = null;
    }

    return new Promise<void>((resolve, reject) => {
      // Store the resolve function so we can call it if interrupted
      currentAudioResolver.current = resolve;

      const audio = getAudioInstance();

      // Cleanup previous listeners to avoid duplicates and potential race conditions
      audio.onended = null;
      audio.onerror = null;
      audio.oncanplaythrough = null;

      audio.src = src;

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

      // For some browsers/situations, we might need to wait for canplaythrough
      // taking a simpler approach first similar to previous code but adapted
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
           // Auto-play was prevented or other error
           if (currentAudioResolver.current === resolve) {
             currentAudioResolver.current = null;
             reject(error);
           }
        });
      }
    });
  };

    /**
   * Helper to play audio with specific handling for local files which might need 'oncanplaythrough'
   */
  const playLocalAudio = (src: string): Promise<void> => {
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


  /**
   * Sanitize text to match audio filename format
   */
  const sanitizeFilename = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[?!.,;:'"()\/\\]/g, '')
      .replace(/\s+/g, '_')
      .trim();
  };

  const playAudio = async (event: React.MouseEvent, text: string, lang: string) => {
    // Prevent the card from flipping when clicking the audio button
    event.stopPropagation();

    // With the new cancellation logic, we allow "re-triggering" even if playing.
    // However, if we want to prevent spamming, we could keep `if (isPlaying) return;`
    // BUT the requirement was to fix hanging promises which implies better handling of state.
    // If we return here, we can't switch tracks.
    // Let's allow switching tracks (interrupting) by removing the strict `if (isPlaying) return`.
    // Wait, the UI shows a spinner when isPlaying is true. If we click another button,
    // we want to stop the current one and start the new one.

    const executionId = ++currentExecutionIdRef.current;

    // Setting isPlaying(true) again is fine.
    setIsPlaying(true);

    try {
      // 1. Local Audio Files (Offline Support) - For Cantonese
      if (lang === 'tl-PH') {
        try {
          const filename = sanitizeFilename(text);
          // Use BASE_URL for correct path in production (e.g., /ionic_demo/)
          const basePath = import.meta.env.BASE_URL || '/';
          const audioPath = `${basePath}audio/${filename}.mp3`;

          await playLocalAudio(audioPath);
          return;
        } catch (e) {
            // Only warn if it's not an interruption
            if (e !== 'Interrupted') {
               console.warn('Local audio not found, trying online TTS', e);
            }
        }

        // 2. Fallback: Google Cloud TTS Serverless API
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

      // 2. Google Translate TTS (Unofficial API) - Often better pronunciation than native browser
      let googleLang = lang;
      if (lang === 'tl-PH') googleLang = 'tl';

      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${googleLang}&q=${encodeURIComponent(text)}`;

      await playAudioFromSrc(audioUrl);

    } catch (error) {
      console.warn('Google TTS failed, falling back to Web Speech API', error);

      // 3. Web Speech API (Native Browser Support)
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);

        // Try to find a specific native voice for fallback
        if (lang === 'tl-PH') {
          const voices = window.speechSynthesis.getVoices();
          const nativeVoice = voices.find(v => v.lang === 'tl-PH' || v.lang === 'yue-HK' || v.name.includes('Cantonese') || v.name.includes('Filipino'));
          if (nativeVoice) utterance.voice = nativeVoice;
        }

        utterance.lang = lang;
        utterance.rate = 0.9;

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

  /**
   * Play audio at slow speed (0.6x) for language learners - Cantonese only
   * First tries local slow audio files, falls back to online TTS API
   */
  const playSlowAudio = async (event: React.MouseEvent, text: string) => {
    event.stopPropagation();

    const executionId = ++currentExecutionIdRef.current;

    // Allow interruption
    setIsPlaying(true);

    try {
      // 1. Try local slow audio file first
      try {
        const filename = sanitizeFilename(text);
        const basePath = import.meta.env.BASE_URL || '/';
        const audioPath = `${basePath}audio/${filename}_slow.mp3`;

        await playLocalAudio(audioPath);
        return;
      } catch (e) {
          if (e !== 'Interrupted') {
             console.warn('Local slow audio not found, trying online TTS', e);
          }
      }

      // 2. Fallback: Online TTS API with speakingRate 0.6
      try {
        const audioContent = await fetchTTS({
          text,
          languageCode: 'yue-HK',
          voiceName: 'yue-HK-Standard-A',
          speakingRate: 0.6,
        });

        if (audioContent) {
          await playAudioFromSrc(`data:audio/mp3;base64,${audioContent}`);
          return;
        }
      } catch (e) {
        console.warn('Google Cloud Slow TTS Serverless failed, falling back', e);
      }

      // 3. Google Translate TTS (Unofficial API) - Does not support speed adjustments easily
      // We will skip Google Translate TTS here because it doesn't support speaking rate
      // and go straight to the Web Speech API which does.

      throw new Error('Fallback to Web Speech API');

    } catch (error) {
      console.warn('Slow TTS failed, falling back to Web Speech API', error);

      // 4. Web Speech API (Native Browser Support)
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);

        // Try to find a specific native voice for fallback
        const voices = window.speechSynthesis.getVoices();
        const nativeVoice = voices.find(v => v.lang === 'tl-PH' || v.lang === 'yue-HK' || v.name.includes('Cantonese') || v.name.includes('Filipino'));
        if (nativeVoice) utterance.voice = nativeVoice;

        utterance.lang = 'tl-PH';
        utterance.rate = 0.6; // Slow speed

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

  return (
    <div
      className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner">
        {/* Front of Card (Cantonese) */}
        <div className="flashcard-front">
          <div className="audio-btn-group">
            <IonButton
              fill="clear"
              className="audio-btn"
              onClick={(e) => playAudio(e, cantonese, 'tl-PH')}
              // Remove disabled={isPlaying} to allow interruption
              title="Normal speed"
            >
              {isPlaying ? <IonSpinner name="dots" color="primary" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="primary" />}
            </IonButton>
            <IonButton
              fill="clear"
              className="slow-audio-btn"
              onClick={(e) => playSlowAudio(e, cantonese)}
              // Remove disabled={isPlaying}
              title="Slow speed (learner mode)"
            >
              <IonIcon icon={volumeLowOutline} slot="icon-only" color="primary" />
            </IonButton>
          </div>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="primary" />
          </IonButton>
          <h2>{cantonese}</h2>
          <p className="flip-hint">{t('flashcard.tapToSeeTranslation')}</p>
        </div>

        {/* Back of Card (Translation) */}
        <div className="flashcard-back">
          <IonButton
            fill="clear"
            className="audio-btn"
            onClick={(e) => playAudio(e, translation.text, translation.lang)}
            // Remove disabled={isPlaying}
          >
            {isPlaying ? <IonSpinner name="dots" color="light" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />}
          </IonButton>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="light" />
          </IonButton>
          <h2>{translation.text}</h2>

          {example && (
            <div className="example-sentence">
              <div className="example-cantonese-row">
                <p className="example-cantonese">
                  {example.cantonese}
                </p>
                <div className="example-audio-group">
                  <IonButton
                    fill="clear"
                    size="small"
                    className="example-audio-btn"
                    onClick={(e) => playAudio(e, example.cantonese, 'tl-PH')}
                    // Remove disabled={isPlaying}
                    title="Normal speed"
                  >
                    {isPlaying ? <IonSpinner name="dots" color="medium" /> : <IonIcon icon={volumeHighOutline} color="medium" />}
                  </IonButton>
                  <IonButton
                    fill="clear"
                    size="small"
                    className="example-audio-btn"
                    onClick={(e) => playSlowAudio(e, example.cantonese)}
                    // Remove disabled={isPlaying}
                    title="Slow speed"
                  >
                    <IonIcon icon={volumeLowOutline} color="medium" />
                  </IonButton>
                </div>
              </div>
              <p className="example-translation">
                {translation.example}
              </p>
            </div>
          )}

          {!example && <p className="flip-hint">{t('flashcard.tapToSeeCantonese')}</p>}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
