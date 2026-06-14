import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronUpOutline } from 'ionicons/icons';
import './BackToTopButton.css';

interface BackToTopButtonProps {
    onClick: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ onClick }) => {
    return (
        <div className="back-to-top-container" onClick={onClick}>
            <div className="back-to-top-button">
                <IonIcon icon={chevronUpOutline} />
            </div>
        </div>
    );
};

export default BackToTopButton;
