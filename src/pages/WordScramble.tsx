import React, { useState, useEffect, useMemo } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { trophyOutline, refreshOutline, shuffleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { lessons, Flashcard, allCards } from '../data/lessons';
import './WordScramble.css';

// Shuffle array utility
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Scramble word ensuring it's different from original
const scrambleWord = (word: string): string[] => {
    const letters = word.split('');
    let scrambled = shuffleArray(letters);
    // Ensure it's actually scrambled (not same as original)
    let attempts = 0;
    while (scrambled.join('') === word && attempts < 10) {
        scrambled = shuffleArray(letters);
        attempts++;
    }
    return scrambled;
};

const QUESTIONS_PER_ROUND = 8;

const WordScramble: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
    const [selectedLetters, setSelectedLetters] = useState<number[]>([]);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [gameCards, setGameCards] = useState<Flashcard[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);

    // Get translation based on current language
    const getTranslation = (card: Flashcard): string => {
        switch (i18n.language) {
            case 'zh-TW': return card.zhTW || card.english;
            case 'zh-CN': return card.zhCN || card.english;
            default: return card.english;
        }
    };

    // Initialize game
    const startGame = () => {
        // Filter cards with reasonable word length (3-10 letters)
        const validCards = allCards.filter(c => c.cantonese.length >= 3 && c.cantonese.length <= 12 && !c.cantonese.includes(' '));
        const shuffled = shuffleArray(validCards).slice(0, QUESTIONS_PER_ROUND);
        setGameCards(shuffled);
        setQuestionIndex(0);
        setScore(0);
        setSelectedLetters([]);
        setFeedback(null);
        setIsGameOver(false);
    };

    // Set up current question
    useEffect(() => {
        if (gameCards.length === 0) {
            startGame();
            return;
        }

        if (questionIndex < gameCards.length) {
            const currentCard = gameCards[questionIndex];
            setScrambledLetters(scrambleWord(currentCard.cantonese));
            setSelectedLetters([]);
            setFeedback(null);
        }
    }, [questionIndex, gameCards]);

    const currentCard = gameCards[questionIndex];

    // Get the current answer attempt
    const currentAnswer = selectedLetters.map(i => scrambledLetters[i]).join('');

    // Check if answer is complete
    useEffect(() => {
        if (!currentCard || feedback !== null) return;

        if (currentAnswer.length === currentCard.cantonese.length) {
            const isCorrect = currentAnswer === currentCard.cantonese;
            setFeedback(isCorrect ? 'correct' : 'incorrect');

            if (isCorrect) {
                setScore(prev => prev + 1);
            }

            // Auto-advance after delay
            setTimeout(() => {
                if (questionIndex + 1 >= QUESTIONS_PER_ROUND) {
                    setIsGameOver(true);
                } else {
                    setQuestionIndex(prev => prev + 1);
                }
            }, 1200);
        }
    }, [currentAnswer, currentCard, feedback, questionIndex]);

    const handleLetterClick = (index: number) => {
        if (feedback !== null) return;

        if (selectedLetters.includes(index)) {
            // Deselect letter
            setSelectedLetters(prev => prev.filter(i => i !== index));
        } else {
            // Select letter
            setSelectedLetters(prev => [...prev, index]);
        }
    };

    const handleClear = () => {
        if (feedback !== null) return;
        setSelectedLetters([]);
    };

    const handleReshuffle = () => {
        if (feedback !== null || !currentCard) return;
        setScrambledLetters(scrambleWord(currentCard.cantonese));
        setSelectedLetters([]);
    };

    // Game Over Screen
    if (isGameOver) {
        const percentage = Math.round((score / QUESTIONS_PER_ROUND) * 100);
        return (
            <IonPage>
                <CommonHeader title={t('scramble.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding scramble-content">
                    <div className="scramble-over-container fade-in-up">
                        <div className="scramble-over-card">
                            <div className="trophy-icon">
                                <IonIcon icon={trophyOutline} />
                            </div>
                            <h2>{t('scramble.complete')}</h2>
                            <p className="scramble-over-subtitle">{t('scramble.greatUnscrambling')}</p>

                            <div className="score-grid">
                                <div className="score-item">
                                    <div className="score-label">{t('game.finalScore')}</div>
                                    <div className="score-value">{score}/{QUESTIONS_PER_ROUND}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('game.accuracy')}</div>
                                    <div className="score-value accent">{percentage}%</div>
                                </div>
                            </div>

                            <IonButton expand="block" className="play-again-btn" onClick={startGame}>
                                <IonIcon icon={refreshOutline} slot="start" />
                                {t('game.playAgain')}
                            </IonButton>

                            <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
                                {t('review.backToHome')}
                            </IonButton>
                        </div>
                        <Footer />
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (!currentCard) {
        return (
            <IonPage>
                <CommonHeader title={t('scramble.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding scramble-content">
                    <div className="loading-container">
                        <p>{t('game.loading')}</p>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <CommonHeader title={t('scramble.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding scramble-content">
                <div className="scramble-container">
                    {/* Progress Bar */}
                    <div className="scramble-progress">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ transform: `scaleX(${((questionIndex) / QUESTIONS_PER_ROUND)})` }}
                            />
                        </div>
                        <div className="progress-text">
                            {questionIndex + 1} / {QUESTIONS_PER_ROUND}
                        </div>
                    </div>

                    {/* Score Display */}
                    <div className="scramble-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('game.score')}</span>
                            <span className="stat-value">{score}</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className={`scramble-card ${feedback === 'correct' ? 'correct' : ''} ${feedback === 'incorrect' ? 'incorrect' : ''}`}>
                        <div className="scramble-prompt-label">{t('scramble.unscramble')}</div>
                        <h2 className="scramble-prompt">{getTranslation(currentCard)}</h2>
                    </div>

                    {/* Answer Display */}
                    <div className="answer-display">
                        <div className="answer-slots">
                            {currentCard.cantonese.split('').map((_, index) => (
                                <div key={index} className={`answer-slot ${selectedLetters[index] !== undefined ? 'filled' : ''} ${feedback}`}>
                                    {selectedLetters[index] !== undefined ? scrambledLetters[selectedLetters[index]] : ''}
                                </div>
                            ))}
                        </div>
                        {feedback === 'incorrect' && (
                            <div className="correct-answer">
                                {t('scramble.correctWas')} <strong>{currentCard.cantonese}</strong>
                            </div>
                        )}
                    </div>

                    {/* Scrambled Letters */}
                    <div className="scrambled-letters">
                        {scrambledLetters.map((letter, index) => (
                            <button
                                key={index}
                                className={`letter-tile ${selectedLetters.includes(index) ? 'selected' : ''}`}
                                onClick={() => handleLetterClick(index)}
                                disabled={feedback !== null}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <IonButton fill="outline" onClick={handleClear} disabled={selectedLetters.length === 0 || feedback !== null}>
                            {t('scramble.clear')}
                        </IonButton>
                        <IonButton fill="outline" onClick={handleReshuffle} disabled={feedback !== null}>
                            <IonIcon icon={shuffleOutline} slot="start" />
                            {t('scramble.shuffle')}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default WordScramble;
