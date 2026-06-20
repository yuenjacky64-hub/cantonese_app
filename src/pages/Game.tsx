import React, { useState, useEffect, useCallback } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline, refreshOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { StreakMark, TrophyMark } from '../components/Marks';
import { recordToneAttempt } from '../utils/toneStats';
import { Flashcard, allCards } from '../data/lessons';
import { shuffleArray, getRandomElements } from '../utils/array';
import './Game.css';

const QUESTIONS_PER_ROUND = 10;

const Game: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameCards, setGameCards] = useState<Flashcard[]>([]);
    const [options, setOptions] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);

    // Get translation based on current language
    const getTranslation = useCallback((card: Flashcard): string => {
        switch (i18n.language) {
            case 'zh-TW': return card.zhTW || card.english;
            case 'zh-CN': return card.zhCN || card.english;
            default: return card.english;
        }
    }, [i18n.language]);

    // Initialize game
    const startGame = () => {
        const shuffled = shuffleArray(allCards).slice(0, QUESTIONS_PER_ROUND);
        setGameCards(shuffled);
        setQuestionIndex(0);
        setScore(0);
        setStreak(0);
        setBestStreak(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsGameOver(false);
    };

    // Generate options for current question
    useEffect(() => {
        if (gameCards.length === 0) {
            startGame();
            return;
        }

        if (questionIndex >= gameCards.length) {
            setIsGameOver(true);
            return;
        }

        const currentCard = gameCards[questionIndex];
        const correctAnswer = getTranslation(currentCard);

        // Get 3 wrong answers from other cards (O(1) selection)
        const wrongAnswers = getRandomElements(allCards, 3, c => c.id === currentCard.id)
            .map(c => getTranslation(c));

        // Combine and shuffle
        const allOptions = shuffleArray([correctAnswer, ...wrongAnswers]);
        setOptions(allOptions);
        setSelectedAnswer(null);
        setIsCorrect(null);
    }, [questionIndex, gameCards, getTranslation]);

    const handleAnswer = (answer: string) => {
        if (selectedAnswer !== null) return; // Prevent double-clicks

        const currentCard = gameCards[questionIndex];
        const correctAnswer = getTranslation(currentCard);
        const correct = answer === correctAnswer;

        setSelectedAnswer(answer);
        setIsCorrect(correct);
        recordToneAttempt(currentCard.cantonese, correct);

        if (correct) {
            setScore(prev => prev + 1);
            setStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak > bestStreak) setBestStreak(newStreak);
                return newStreak;
            });
        } else {
            setStreak(0);
        }

        // Auto-advance after delay
        setTimeout(() => {
            setQuestionIndex(prev => prev + 1);
        }, 1200);
    };

    const currentCard = gameCards[questionIndex];

    // Game Over Screen
    if (isGameOver) {
        const percentage = Math.round((score / QUESTIONS_PER_ROUND) * 100);
        return (
            <IonPage>
                <CommonHeader title={t('game.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding game-content">
                    <div className="game-over-container fade-in-up">
                        <div className="game-over-card">
                            <div className="trophy-icon">
                                <TrophyMark size={36} />
                            </div>
                            <h2>{t('game.roundComplete')}</h2>
                            <p className="game-over-subtitle">{t('game.greatJob')}</p>

                            <div className="score-grid">
                                <div className="score-item">
                                    <div className="score-label">{t('game.finalScore')}</div>
                                    <div className="score-value">{score}/{QUESTIONS_PER_ROUND}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('game.accuracy')}</div>
                                    <div className="score-value accent">{percentage}%</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('game.bestStreak')}</div>
                                    <div className="score-value streak"><StreakMark /> {bestStreak}</div>
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
                <CommonHeader title={t('game.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding game-content">
                    <div className="loading-container">
                        <p>{t('game.loading')}</p>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <CommonHeader title={t('game.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding game-content">
                <div className="game-container">
                    {/* Progress Bar */}
                    <div className="game-progress">
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

                    {/* Score & Streak */}
                    <div className="game-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('game.score')}</span>
                            <span className="stat-value">{score}</span>
                        </div>
                        {streak > 0 && (
                            <div className="stat-item streak-indicator">
                                <StreakMark />
                                <span className="stat-value">{streak}</span>
                            </div>
                        )}
                    </div>

                    {/* Question Card */}
                    <div className={`question-card ${isCorrect === true ? 'correct' : ''} ${isCorrect === false ? 'incorrect' : ''}`}>
                        <div className="question-label">{t('game.whatDoesThisMean')}</div>
                        <h2 className="question-word">{currentCard.cantonese}</h2>
                    </div>

                    {/* Answer Options */}
                    <div className="options-grid">
                        {options.map((option, index) => {
                            const correctAnswer = getTranslation(currentCard);
                            const isThisCorrect = option === correctAnswer;
                            const isSelected = selectedAnswer === option;

                            let optionClass = 'option-btn';
                            if (selectedAnswer !== null) {
                                if (isThisCorrect) optionClass += ' correct';
                                else if (isSelected) optionClass += ' incorrect';
                                else optionClass += ' disabled';
                            }

                            return (
                                <button
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleAnswer(option)}
                                    disabled={selectedAnswer !== null}
                                >
                                    <span className="option-text">{option}</span>
                                    {selectedAnswer !== null && isThisCorrect && (
                                        <IonIcon icon={checkmarkCircleOutline} className="result-icon correct" />
                                    )}
                                    {isSelected && !isThisCorrect && (
                                        <IonIcon icon={closeCircleOutline} className="result-icon incorrect" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Game;
