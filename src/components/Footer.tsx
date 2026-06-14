import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart, globeOutline } from 'ionicons/icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import BackToTopButton from './BackToTopButton';

const Footer: React.FC = () => {
    const { t } = useTranslation();

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
                    <a href="#">Privacy Policy</a>
                    <span className="footer-dot">•</span>
                    <a href="#">Terms of Service</a>
                    <span className="footer-dot">•</span>
                    <a href="#">Contact</a>
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
                    Made with <IonIcon icon={heart} className="heart-icon" /> for Cantonese learners
                </div>
            </div>
        </footer>
    );
};

export default Footer;
