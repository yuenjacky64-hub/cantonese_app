import React from 'react';
import {
  IonModal,
  IonButton,
  IonRadioGroup,
  IonRadio
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import type { i18n as I18n } from 'i18next';

interface CommonHeaderModalsProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  showBuildInfo: boolean;
  setShowBuildInfo: (show: boolean) => void;
  i18n: I18n;
  handleLanguageChange: (langCode: string) => void;
  currentTheme: string;
  handleThemeChange: (themeId: string) => void;
  languages: { code: string; name: string; shortName: string; }[];
  themes: { id: string; nameKey: string; color: string; }[];
  buildDate: string;
}

const CommonHeaderModals: React.FC<CommonHeaderModalsProps> = ({
  showSettings,
  setShowSettings,
  showBuildInfo,
  setShowBuildInfo,
  i18n,
  handleLanguageChange,
  currentTheme,
  handleThemeChange,
  languages,
  themes,
  buildDate
}) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Settings Modal: Language & Theme Selection */}
      <IonModal
        isOpen={showSettings}
        onDidDismiss={() => setShowSettings(false)}
        className="settings-modal"
        initialBreakpoint={0.85}
        breakpoints={[0, 0.5, 0.85, 1]}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{t('home.settings')}</h2>
            <IonButton fill="clear" onClick={() => setShowSettings(false)} className="modal-close-btn">
              {t('common.close')}
            </IonButton>
          </div>

          <div className="modal-body">
            {/* Language Section */}
            <div className="settings-section">
              <h3 className="section-title">{t('home.languageSelection')}</h3>
              <div className="settings-card">
                <IonRadioGroup value={i18n.language} onIonChange={e => handleLanguageChange(e.detail.value)}>
                  {languages.map((lang, idx) => (
                    <div key={lang.code} className={`settings-item ${idx !== languages.length - 1 ? 'bordered' : ''}`}>
                      <span className="item-label">{lang.name}</span>
                      <IonRadio value={lang.code} />
                    </div>
                  ))}
                </IonRadioGroup>
              </div>
            </div>

            {/* Theme Section */}
            <div className="settings-section">
              <h3 className="section-title">{t('home.themeSelection')}</h3>
              <div className="settings-card">
                <IonRadioGroup value={currentTheme} onIonChange={e => handleThemeChange(e.detail.value)}>
                  {themes.map((theme, idx) => (
                    <div key={theme.id} className={`settings-item ${idx !== themes.length - 1 ? 'bordered' : ''}`}>
                      <div className="theme-item">
                        <div className="theme-swatch" style={{ backgroundColor: theme.color }} />
                        <span className="item-label">{t(theme.nameKey)}</span>
                      </div>
                      <IonRadio value={theme.id} />
                    </div>
                  ))}
                </IonRadioGroup>
              </div>
            </div>
          </div>
        </div>
      </IonModal>

      {/* Build Info Modal: Version & Commit Details */}
      <IonModal
        isOpen={showBuildInfo}
        onDidDismiss={() => setShowBuildInfo(false)}
        className="build-info-modal"
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 0.75]}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{t('common.buildInfo')}</h2>
            <IonButton fill="clear" onClick={() => setShowBuildInfo(false)} className="modal-close-btn">
              {t('common.close')}
            </IonButton>
          </div>

          <div className="modal-body">
            <div className="info-card">
              <div className="info-row">
                <span className="info-label">{t('common.version')}</span>
                <span className="info-value version-badge">{__BUILD_INFO__.version}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('common.buildTime')}</span>
                <span className="info-value">{buildDate}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('common.commitHash')}</span>
                <span className="info-value mono">{__BUILD_INFO__.hash}</span>
              </div>
            </div>

            <div className="commit-message">
              <span className="info-label">{t('common.message')}</span>
              <p className="message-text">{__BUILD_INFO__.message}</p>
            </div>
          </div>
        </div>
      </IonModal>
    </>
  );
};

export default CommonHeaderModals;
