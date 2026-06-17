import React, { useState, useCallback, useRef } from 'react';
import {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    useIonViewWillLeave
} from '@ionic/react';
import {
    heart,
    refreshOutline,
    homeOutline,
    trophyOutline,
    playOutline,
    flashOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import { Flashcard, allCards as allCardsModuleScope } from '../data/lessons';
import { shuffleArray } from '../utils/array';
import './FallingWords.css';

const FallingWords: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Game State
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [currentCard, setCurrentCard] = useState<Flashcard | null>(null);
    const [options, setOptions] = useState<string[]>([]);
    const [animationDuration, setAnimationDuration] = useState(5000); // ms
    const [wordKey, setWordKey] = useState(0); // To force re-render/restart animation

    const allCards = useRef<Flashcard[]>(allCardsModuleScope);
    const containerRef = useRef<HTMLDivElement>(null);

    const getTranslation = useCallback((card: Flashcard): string => {
        switch (i18n.language) {
            case 'zh-TW': return card.zhTW || card.english;
            case 'zh-CN': return card.zhCN || card.english;
            default: return card.english;
        }
    }, [i18n.language]);

    const startGame = () => {
        setScore(0);
        setLives(3);
        setAnimationDuration(5000);
        setIsPlaying(true);
        setGameOver(false);
        nextRound(true);
    };

    const nextRound = useCallback((force = false) => {
        if (!force && !isPlaying) return;

        const cards = allCards.current;
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        setCurrentCard(randomCard);

        const correctAnswer = getTranslation(randomCard);
        const otherCards = cards.filter(c => c.id !== randomCard.id);
        const wrongAnswers = shuffleArray(otherCards)
            .slice(0, 3)
            .map(c => getTranslation(c));

        setOptions(shuffleArray([correctAnswer, ...wrongAnswers]));
        setWordKey(prev => prev + 1);

        // Speed up every 5 points (uses functional update to avoid stale score)
        setScore(currentScore => {
            if (currentScore > 0 && currentScore % 5 === 0) {
                setAnimationDuration(prev => Math.max(1500, prev * 0.9));
            }
            return currentScore;
        });
    }, [getTranslation, isPlaying]);

    const handleAnswer = (answer: string) => {
        if (!currentCard || gameOver) return;

        const correctAnswer = getTranslation(currentCard);
        if (answer === correctAnswer) {
            setScore(prev => prev + 1);
            nextRound();
        } else {
            handleMiss();
        }
    };

    const handleMiss = useCallback(() => {
        if (gameOver) return;

        // Compute next lives synchronously so we can branch on it without
        // putting side effects inside the state updater (which would
        // double-fire under React Strict Mode).
        const newLives = lives - 1;
        setLives(newLives);

        if (newLives <= 0) {
            setGameOver(true);
            setIsPlaying(false);
        } else {
            nextRound();
        }
    }, [gameOver, lives, nextRound]);

    // Handle animation end (word hit bottom)
    const onAnimationEnd = () => {
        handleMiss();
    };

    // Cleanup on leave
    useIonViewWillLeave(() => {
        setIsPlaying(false);
    });

    return (
        <IonPage>
            <CommonHeader title={t('falling.title')} showBackButton defaultHref="/home" />
            <IonContent className="falling-content" scrollY={false}>

                {/* Game Area */}
                {!gameOver && isPlaying && (
                    <div className="game-area" ref={containerRef}>
                        {/* Stats Header */}
                        <div className="game-stats-bar">
                            <div className="stat-box">
                                <IonIcon icon={trophyOutline} />
                                <span>{score}</span>
                            </div>
                            <div className="stat-box lives">
                                {[...Array(3)].map((_, i) => (
                                    <IonIcon
                                        key={i}
                                        icon={heart}
                                        className={i < lives ? 'life-active' : 'life-lost'}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Falling Word */}
                        {currentCard && (
                            <div
                                key={wordKey}
                                className="falling-word-container"
                                style={{ animationDuration: `${animationDuration}ms` }}
                                onAnimationEnd={onAnimationEnd}
                            >
                                <div className="falling-word-bubble">
                                    {currentCard.cantonese}
                                </div>
                            </div>
                        )}

                        {/* Options */}
                        <div className="options-dock">
                            {options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className="option-tile"
                                    onClick={() => handleAnswer(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Start Screen */}
                {!isPlaying && !gameOver && (
                    <div className="splash-screen">
                        <div className="splash-content">
                            <div className="icon-circle">
                                <IonIcon icon={flashOutline} />
                            </div>
                            <h1>{t('falling.title')}</h1>
                            <p>{t('falling.description')}</p>
                            <IonButton expand="block" shape="round" className="start-btn" onClick={startGame}>
                                <IonIcon icon={playOutline} slot="start" />
                                {t('common.start')}
                            </IonButton>
                        </div>
                    </div>
                )}

                {/* Game Over Screen */}
                {gameOver && (
                    <div className="game-over-screen">
                        <div className="game-over-content">
                            <IonIcon icon={trophyOutline} className="result-trophy" />
                            <h2>{t('common.gameOver')}</h2>
                            <div className="final-score-display">
                                <span>{t('common.score')}</span>
                                <strong>{score}</strong>
                            </div>

                            <div className="action-buttons">
                                <IonButton expand="block" onClick={startGame}>
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('common.playAgain')}
                                </IonButton>
                                <IonButton expand="block" fill="outline" routerLink="/home">
                                    <IonIcon icon={homeOutline} slot="start" />
                                    {t('common.backToHome')}
                                </IonButton>
                            </div>
                        </div>
                    </div>
                )}

            </IonContent>
        </IonPage>
    );
};

export default FallingWords;
