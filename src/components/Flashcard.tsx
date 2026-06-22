import React, { useState, useEffect } from 'react';
import { IonIcon, IonButton, IonSpinner } from '@ionic/react';
import { volumeHighOutline, volumeLowOutline, bookmarkOutline, bookmark } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';
import { useAudioPlayback } from '../hooks/useAudioPlayback';
import Jyutping from './Jyutping';
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

  // State to track if the card is bookmarked
  const [isBookmarkedState, setIsBookmarkedState] = useState(false);

  // Audio playback + 4-tier fallback chain (local mp3 → Cloud TTS →
  // Google Translate → Web Speech). See useAudioPlayback for details.
  const { isPlaying, playAudio, playSlowAudio } = useAudioPlayback();

  useEffect(() => {
    setIsBookmarkedState(isBookmarked(id));
  }, [id]);

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
    return { text: english, lang: 'en-US', example: example?.english };
  };

  const translation = getTranslation();

  // Get the appropriate Chinese text for the front of the card based on UI language
  const displayWord = i18n.language === 'zh-CN' ? (zhCN || zhTW || cantonese) : (zhTW || zhCN || cantonese);

  // Get the appropriate Chinese text for the example sentence based on UI language
  const displayExampleText = example
    ? (i18n.language === 'zh-CN' ? (example.zhCN || example.zhTW || example.cantonese) : (example.zhTW || example.zhCN || example.cantonese))
    : '';

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
              onClick={(e) => playAudio(e, displayWord, 'yue-HK')}
              // Remove disabled={isPlaying} to allow interruption
              title={t('flashcard.aria.playAudio')}
              aria-label={t('flashcard.aria.playAudio')}
            >
              {isPlaying ? <IonSpinner name="dots" color="primary" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="primary" />}
            </IonButton>
            <IonButton
              fill="clear"
              className="slow-audio-btn"
              onClick={(e) => playSlowAudio(e, displayWord)}
              // Remove disabled={isPlaying}
              title={t('flashcard.aria.playSlow')}
              aria-label={t('flashcard.aria.playSlow')}
            >
              <IonIcon icon={volumeLowOutline} slot="icon-only" color="primary" />
            </IonButton>
          </div>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
            aria-label={t(isBookmarkedState ? 'flashcard.aria.bookmarkRemove' : 'flashcard.aria.bookmarkAdd')}
            aria-pressed={isBookmarkedState ? 'true' : 'false'}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="primary" />
          </IonButton>
          <h2>{displayWord}</h2>
          <div className="jyutping-hint">
            <Jyutping text={cantonese} size="lg" />
          </div>
          <p className="flip-hint">{t('flashcard.tapToSeeTranslation')}</p>
        </div>

        {/* Back of Card (Translation) */}
        <div className="flashcard-back">
          <IonButton
            fill="clear"
            className="audio-btn"
            onClick={(e) => playAudio(e, translation.text, translation.lang)}
            // Remove disabled={isPlaying}
            aria-label={t('flashcard.aria.playAudio')}
          >
            {isPlaying ? <IonSpinner name="dots" color="light" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />}
          </IonButton>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
            aria-label={t(isBookmarkedState ? 'flashcard.aria.bookmarkRemove' : 'flashcard.aria.bookmarkAdd')}
            aria-pressed={isBookmarkedState ? 'true' : 'false'}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="light" />
          </IonButton>
          <h2>{translation.text}</h2>

          {example && (
            <div className="example-sentence">
              <div className="example-cantonese-row">
                <p className="example-cantonese">
                  {displayExampleText}
                </p>
                <div className="example-audio-group">
                  <IonButton
                    fill="clear"
                    size="small"
                    className="example-audio-btn"
                    onClick={(e) => playAudio(e, displayExampleText, 'yue-HK')}
                    // Remove disabled={isPlaying}
                    title={t('flashcard.aria.playExample')}
                    aria-label={t('flashcard.aria.playExample')}
                  >
                    {isPlaying ? <IonSpinner name="dots" color="medium" /> : <IonIcon icon={volumeHighOutline} color="medium" />}
                  </IonButton>
                  <IonButton
                    fill="clear"
                    size="small"
                    className="example-audio-btn"
                    onClick={(e) => playSlowAudio(e, displayExampleText)}
                    // Remove disabled={isPlaying}
                    title={t('flashcard.aria.playExampleSlow')}
                    aria-label={t('flashcard.aria.playExampleSlow')}
                  >
                    <IonIcon icon={volumeLowOutline} color="medium" />
                  </IonButton>
                </div>
              </div>
              <div className="example-jyutping">
                <Jyutping text={example.cantonese} size="sm" showContour={false} />
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
