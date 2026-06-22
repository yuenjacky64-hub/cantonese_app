import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonText
} from '@ionic/react';
import { settingsOutline, chatbubblesOutline, timeOutline, informationCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTimer } from '../context/TimerContext';
import './CommonHeader.css';

const CommonHeaderModals = lazy(() => import('./CommonHeaderModals'));

interface CommonHeaderProps {
  /** Title to display in the header. */
  title: string;
  /** Whether to show the back button. Defaults to false. */
  showBackButton?: boolean;
  /** The route to navigate to when back button is clicked. Defaults to '/'. */
  defaultHref?: string;
}

// Available color themes for the application
const themes = [
  { id: 'theme-teal', nameKey: 'home.themes.teal', color: '#0d9488' },
  { id: 'theme-navy', nameKey: 'home.themes.navy', color: '#0f2c4c' },
  { id: 'theme-purple', nameKey: 'home.themes.purple', color: '#7e22ce' },
  { id: 'theme-green', nameKey: 'home.themes.green', color: '#15803d' },
];

// Available languages
const languages = [
  { code: 'en', name: 'English', shortName: 'EN' },
  { code: 'zh-TW', name: '繁體中文', shortName: '繁' },
  { code: 'zh-CN', name: '简体中文', shortName: '簡' },
];

const LanguageButton = React.memo(({ lang, isActive, onClick }: { lang: typeof languages[0], isActive: boolean, onClick: (code: string) => void }) => (
  <IonButton
    onClick={() => onClick(lang.code)}
    size="small"
    style={{
      '--background': isActive ? 'var(--ion-color-primary)' : 'transparent',
      '--color': isActive ? 'var(--ion-color-primary-contrast)' : '#94a3b8',
      '--box-shadow': isActive ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
      '--border-radius': '10px',
      margin: 0,
      height: '32px',
      fontSize: '0.75rem',
      fontWeight: 800,
      padding: '0 14px'
    }}
  >
    {lang.shortName}
  </IonButton>
));

/**
 * CommonHeader Component.
 *
 * Displays the application header with:
 * - Title and Logo
 * - Study Timer
 * - Language Switcher
 * - Settings and Build Info Buttons
 *
 * Handles theme switching and language changing via modals.
 */
const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBackButton = false, defaultHref = '/' }) => {
  const { t, i18n } = useTranslation();
  const { formattedTime } = useTimer();

  // State for controlling modals
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-teal');

  // Format build date from global define
  const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    setCurrentTheme(savedTheme);
  }, []);

  /**
     * Updates the application theme.
     * Applies class to body and saves to localStorage.
     */
  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('app-theme', themeId);
    document.body.className = themeId;
  };

  /**
   * Updates the application language.
   * Changes i18next language and saves preference.
   */
  const handleLanguageChange = useCallback((langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
  }, [i18n]);

  return (
    <>
      <IonHeader className="ion-no-border common-header">
        <IonToolbar style={{
          '--background': '#ffffff',
          border: '1px solid var(--hairline)',
          borderRadius: '14px',
          boxShadow: 'var(--luminous-shadow)',
          padding: '4px 8px'
        }}>
          {/* Left Side: Back Button & Title */}
          <IonButtons slot="start" style={{ alignItems: 'center' }}>
            {showBackButton && (
              <IonBackButton defaultHref={defaultHref} text="" style={{ '--color': '#64748b', marginRight: '8px' }} />
            )}
            <Link
              to="/home"
              className="header-title-container"
              style={{ marginLeft: showBackButton ? '0px' : '4px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ padding: '8px', background: 'var(--ink)', borderRadius: '10px', display: 'flex', boxShadow: '0 2px 0 var(--neon-hot)', transform: 'rotate(-2deg)' }}>
                <IonIcon icon={chatbubblesOutline} style={{ color: 'var(--paper)', fontSize: '20px' }} />
              </div>
              {title}
            </Link>
          </IonButtons>

          {/* Right Side: Timer, Language, Settings */}
          <IonButtons slot="end">
            {/* Study Timer Display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'transparent',
              padding: '4px 10px',
              borderRadius: '999px',
              marginRight: '8px',
              border: '1px solid var(--hairline)'
            }}>
              <IonText className="todays-learning-text" style={{ fontFamily: 'var(--font-jyutping)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--graphite)', marginRight: '8px' }}>
                {t('common.todaysLearning')}
              </IonText>
              <IonIcon icon={timeOutline} style={{ fontSize: '14px', color: 'var(--graphite)', marginRight: '4px' }} />
              <IonText style={{ fontFamily: 'var(--font-jyutping)', fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>
                {formattedTime}
              </IonText>
            </div>

            {/* Language Switcher Buttons */}
            <div className="language-switcher-container">
              {languages.map(lang => (
                <LanguageButton
                  key={lang.code}
                  lang={lang}
                  isActive={i18n.language === lang.code}
                  onClick={handleLanguageChange}
                />
              ))}
            </div>

            {/* Info & Settings Icons */}
            <IonButton onClick={() => setShowBuildInfo(true)} style={{ '--color': '#94a3b8' }} data-testid="build-info-btn" aria-label="Build Info">
              <IonIcon slot="icon-only" icon={informationCircleOutline} style={{ fontSize: '22px' }} />
            </IonButton>
            <IonButton onClick={() => setShowSettings(true)} style={{ '--color': '#94a3b8' }} data-testid="settings-btn" aria-label="Settings">
              <IonIcon slot="icon-only" icon={settingsOutline} style={{ fontSize: '22px' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {(showSettings || showBuildInfo) && (
        <Suspense fallback={null}>
          <CommonHeaderModals
            showSettings={showSettings}
            setShowSettings={setShowSettings}
            showBuildInfo={showBuildInfo}
            setShowBuildInfo={setShowBuildInfo}
            i18n={i18n}
            handleLanguageChange={handleLanguageChange}
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
            languages={languages}
            themes={themes}
            buildDate={buildDate}
          />
        </Suspense>
      )}
    </>
  );
};

export default CommonHeader;
