import React, { useState } from 'react';
import { IonIcon, IonModal, IonButton } from '@ionic/react';
import { heart, globeOutline } from 'ionicons/icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import BackToTopButton from './BackToTopButton';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    const scrollToTop = () => {
        const content = document.querySelector('.ion-page:not(.ion-page-hidden) ion-content') as HTMLIonContentElement | null;
        if (content && content.scrollToTop) {
            content.scrollToTop(500);
        }
    };
    const year = new Date().getFullYear();

    // Safely access __BUILD_INFO__ in case it's not defined in test environment
    const buildVersion = typeof __BUILD_INFO__ !== 'undefined' ? __BUILD_INFO__.version : '1.0.0';
    const buildHash = typeof __BUILD_INFO__ !== 'undefined' ? __BUILD_INFO__.hash : 'dev';

    return (
        <footer className="luminous-footer">
            <BackToTopButton onClick={scrollToTop} />
            <div className="footer-content">
                <div className="footer-logo">
                    <IonIcon icon={globeOutline} className="footer-icon" />
                    <span>{t('common.appTitle')}</span>
                </div>

                <div className="footer-links">
                    <a href="#" onClick={(e) => { e.preventDefault(); }}>{t('footer.privacyPolicy')}</a>
                    <span className="footer-dot">•</span>
                    <a href="#" onClick={(e) => { e.preventDefault(); }}>{t('footer.termsOfService')}</a>
                    <span className="footer-dot">•</span>
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowDisclaimer(true); }}>{t('footer.disclaimer')}</a>
                    <span className="footer-dot">•</span>
                    <a href="#" onClick={(e) => { e.preventDefault(); }}>{t('footer.contact')}</a>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {year} {t('common.appTitle')}. All rights reserved.
                    </div>
                    <div className="footer-version">
                        v{buildVersion} ({buildHash})
                    </div>
                </div>

                <div className="footer-made-with">
                    {t('footer.madeWith')} <IonIcon icon={heart} className="heart-icon" /> {t('footer.forLearners')}
                </div>
            </div>

            {/* Disclaimer Modal */}
            <IonModal
                isOpen={showDisclaimer}
                onDidDismiss={() => setShowDisclaimer(false)}
                className="disclaimer-modal"
                initialBreakpoint={0.5}
                breakpoints={[0, 0.5, 0.75, 1]}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">{t('footer.disclaimerTitle')}</h2>
                        <IonButton fill="clear" onClick={() => setShowDisclaimer(false)} className="modal-close-btn">
                            {t('common.close')}
                        </IonButton>
                    </div>
                    <div className="modal-body">
                        <div className="disclaimer-card">
                            <p>{t('footer.disclaimerContent')}</p>
                        </div>
                    </div>
                </div>
            </IonModal>
        </footer>
    );
};

export default Footer;
