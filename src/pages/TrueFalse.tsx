import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline, trophyOutline, refreshOutline, checkmarkOutline, closeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { Flashcard, allCards } from '../data/lessons';
import { shuffleArray, getRandomElements } from '../utils/array';
import './TrueFalse.css';

const QUESTIONS_PER_ROUND = 10;

interface TrueFalseQuestion {
    card: Flashcard;
    displayedTranslation: string;
    isActuallyTrue: boolean;
}

const TrueFalse: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [questions, setQuestions] = useState<TrueFalseQuestion[]>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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
        const shuffled = shuffleArray(allCards).slice(0, QUESTIONS_PER_ROUND);

        const generatedQuestions = shuffled.map(card => {
            const isTrue = Math.random() > 0.5;
            let displayedTranslation = '';

            if (isTrue) {
                displayedTranslation = getTranslation(card);
            } else {
                // Pick a random translation from another card
                const wrongCard = getRandomElements(allCards, 1, c => c.id === card.id)[0];
                displayedTranslation = getTranslation(wrongCard);
            }

            return {
                card,
                displayedTranslation,
                isActuallyTrue: isTrue
            };
        });

        setQuestions(generatedQuestions);
        setQuestionIndex(0);
        setScore(0);
        setStreak(0);
        setBestStreak(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsGameOver(false);
    };

    useEffect(() => {
        startGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    const handleAnswer = (answer: boolean) => {
        if (selectedAnswer !== null) return; // Prevent double-clicks

        const currentQuestion = questions[questionIndex];
        const correct = answer === currentQuestion.isActuallyTrue;

        setSelectedAnswer(answer);
        setIsCorrect(correct);

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
            if (questionIndex + 1 >= QUESTIONS_PER_ROUND) {
                setIsGameOver(true);
            } else {
                setQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            }
        }, 1200);
    };

    // Game Over Screen
    if (isGameOver) {
        const percentage = Math.round((score / QUESTIONS_PER_ROUND) * 100);
        return (
            <IonPage>
                <CommonHeader title={t('truefalse.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding truefalse-content">
                    <div className="game-over-container fade-in-up">
                        <div className="game-over-card">
                            <div className="trophy-icon">
                                <IonIcon icon={trophyOutline} />
                            </div>
                            <h2>{t('truefalse.roundComplete')}</h2>
                            <p className="game-over-subtitle">{t('truefalse.greatJob')}</p>

                            <div className="score-grid">
                                <div className="score-item">
                                    <div className="score-label">{t('truefalse.finalScore')}</div>
                                    <div className="score-value">{score}/{QUESTIONS_PER_ROUND}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('truefalse.accuracy')}</div>
                                    <div className="score-value accent">{percentage}%</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('truefalse.bestStreak')}</div>
                                    <div className="score-value streak">🔥 {bestStreak}</div>
                                </div>
                            </div>

                            <IonButton expand="block" className="play-again-btn" onClick={startGame}>
                                <IonIcon icon={refreshOutline} slot="start" />
                                {t('truefalse.playAgain')}
                            </IonButton>

                            <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
                                {t('common.backToCategories')}
                            </IonButton>
                        </div>
                        <Footer />
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (questions.length === 0) {
        return (
            <IonPage>
                <CommonHeader title={t('truefalse.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding truefalse-content">
                    <div className="loading-container">
                        <p>{t('truefalse.loading')}</p>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    const currentQuestion = questions[questionIndex];

    return (
        <IonPage>
            <CommonHeader title={t('truefalse.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding truefalse-content">
                <div className="truefalse-container">
                    {/* Progress Bar */}
                    <div className="truefalse-progress">
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
                    <div className="truefalse-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('truefalse.score')}</span>
                            <span className="stat-value">{score}</span>
                        </div>
                        {streak > 0 && (
                            <div className="stat-item streak-indicator">
                                <span className="streak-fire">🔥</span>
                                <span className="stat-value">{streak}</span>
                            </div>
                        )}
                    </div>

                    {/* Question Card */}
                    <div className={`question-card ${isCorrect === true ? 'correct' : ''} ${isCorrect === false ? 'incorrect' : ''}`}>
                        <div className="question-label">{t('truefalse.doesItMean')}</div>
                        <h2 className="question-word">{currentQuestion.card.cantonese}</h2>
                        <div className="translation-box">
                            <span className="translation-text">"{currentQuestion.displayedTranslation}"</span>
                        </div>

                        {/* Show correct translation if answered incorrectly */}
                        {isCorrect === false && (
                            <div className="correct-answer-reveal fade-in-up">
                                <span className="reveal-label">{t('truefalse.correctIs')}</span>
                                <span className="reveal-value">{getTranslation(currentQuestion.card)}</span>
                            </div>
                        )}
                    </div>

                    {/* True/False Buttons */}
                    <div className="tf-options-grid">
                        <button
                            className={`tf-option-btn tf-true ${selectedAnswer === true ? (isCorrect ? 'correct' : 'incorrect') : (selectedAnswer !== null ? 'disabled' : '')}`}
                            onClick={() => handleAnswer(true)}
                            disabled={selectedAnswer !== null}
                        >
                            <IonIcon icon={checkmarkOutline} className="tf-icon" />
                            <span className="tf-text">{t('truefalse.true')}</span>
                        </button>

                        <button
                            className={`tf-option-btn tf-false ${selectedAnswer === false ? (isCorrect ? 'correct' : 'incorrect') : (selectedAnswer !== null ? 'disabled' : '')}`}
                            onClick={() => handleAnswer(false)}
                            disabled={selectedAnswer !== null}
                        >
                            <IonIcon icon={closeOutline} className="tf-icon" />
                            <span className="tf-text">{t('truefalse.false')}</span>
                        </button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TrueFalse;