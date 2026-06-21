import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { trophyOutline, refreshOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { lessons } from '../data/lessons';
import { shuffleArray } from '../utils/array';
import './SentenceBuilder.css';

interface SentenceGameData {
    cardId: string;
    english: string;
    zhTW: string;
    zhCN: string;
    cantoneseSentence: string;
    words: string[];
}

const QUESTIONS_PER_ROUND = 5;

// Clean punctuation for checking and display if needed
const cleanWord = (word: string) => word.replace(/[.,!?]/g, '').toLowerCase();

const areArraysEqual = (a: {id: string, word: string}[], b: {id: string, word: string}[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        // length parity checked above; indices align in both arrays.
        if (a[i]!.id !== b[i]!.id) return false;
    }
    return true;
};

const SentenceBuilder: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [gameData, setGameData] = useState<SentenceGameData[]>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const [availableWords, setAvailableWords] = useState<{id: string, word: string}[]>([]);
    const [selectedWords, setSelectedWords] = useState<{id: string, word: string}[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    // Get all cards that have examples
    const allExampleCards = useMemo(() => {
        const cards = lessons.flatMap(l => l.cards).filter(c => c.example && c.example.cantonese.trim().length > 0);
        // Filter out examples that are too short (less than 3 words)
        return cards.filter(c => c.example!.cantonese.split(' ').length >= 3);
    }, []);

    // Get translation based on current language
    const getTranslation = (data: SentenceGameData): string => {
        switch (i18n.language) {
            case 'zh-TW': return data.zhTW || data.english;
            case 'zh-CN': return data.zhCN || data.english;
            default: return data.english;
        }
    };

    const startGame = useCallback(() => {
        const shuffled = shuffleArray(allExampleCards).slice(0, QUESTIONS_PER_ROUND);

        const mappedData: SentenceGameData[] = shuffled.map(card => {
            const sentence = card.example!.cantonese;
            // Split by space, and we keep punctuation for now in the tiles to make it a bit easier/more natural,
            // or we could strip it. Let's keep words as they are, but clean them for checking.
            const rawWords = sentence.split(' ').filter(w => w.trim().length > 0);

            return {
                cardId: card.id,
                english: card.example!.english,
                zhTW: card.example!.zhTW,
                zhCN: card.example!.zhCN,
                cantoneseSentence: sentence,
                words: rawWords
            };
        });

        setGameData(mappedData);
        setQuestionIndex(0);
        setScore(0);
        setIsGameOver(false);
        setIsCorrect(null);
        if (mappedData[0]) setupQuestion(mappedData[0]);
    }, [allExampleCards]);

    const setupQuestion = (data: SentenceGameData) => {
        // Create word objects with unique IDs since words can repeat
        const wordsWithIds = data.words.map((word, index) => ({
            id: `${index}-${word}`,
            word: word
        }));

        let shuffled = shuffleArray(wordsWithIds);

        // Ensure it's not solved initially
        let attempts = 0;
        while (areArraysEqual(shuffled, wordsWithIds) && attempts < 10) {
            shuffled = shuffleArray(wordsWithIds);
            attempts++;
        }

        setAvailableWords(shuffled);
        setSelectedWords([]);
        setIsCorrect(null);
    };

    useEffect(() => {
        if (allExampleCards.length > 0 && gameData.length === 0) {
            startGame();
        }
    }, [allExampleCards, gameData.length, startGame]);

    const handleSelectWord = (wordObj: {id: string, word: string}) => {
        if (isCorrect !== null) return;

        setAvailableWords(prev => prev.filter(w => w.id !== wordObj.id));
        setSelectedWords(prev => [...prev, wordObj]);
    };

    const handleRemoveWord = (wordObj: {id: string, word: string}) => {
        if (isCorrect !== null) return;

        setSelectedWords(prev => prev.filter(w => w.id !== wordObj.id));
        setAvailableWords(prev => [...prev, wordObj]);
    };

    const handleCheckAnswer = () => {
        if (selectedWords.length === 0) return;

        const currentData = gameData[questionIndex];
        if (!currentData) return;

        // Compare cleaned tokens with a space separator so adjacent duplicate words
        // can't be swapped (e.g. "hou2 hou2") without changing the joined string.
        const userSentence = selectedWords.map(w => cleanWord(w.word)).join(' ');
        const correctSentence = currentData.words.map(w => cleanWord(w)).join(' ');

        const correct = userSentence === correctSentence;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
            setTimeout(() => {
                handleNextQuestion();
            }, 1500);
        }
    };

    const handleNextQuestion = () => {
        if (questionIndex + 1 >= gameData.length) {
            setIsGameOver(true);
        } else {
            const nextIndex = questionIndex + 1;
            setQuestionIndex(nextIndex);
            const next = gameData[nextIndex];
            if (next) setupQuestion(next);
        }
    };

    const handleRetry = () => {
        setIsCorrect(null);
        // Put all words back to available
        const currentData = gameData[questionIndex];
        if (currentData) setupQuestion(currentData);
    };

    if (gameData.length === 0) {
        return (
            <IonPage>
                <CommonHeader title={t('sentence.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding sentence-content">
                    <div className="loading-container">
                        <p>{t('game.loading')}</p>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    if (isGameOver) {
        const percentage = Math.round((score / QUESTIONS_PER_ROUND) * 100);
        return (
            <IonPage>
                <CommonHeader title={t('sentence.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding sentence-content">
                    <div className="game-over-container fade-in-up">
                        <div className="game-over-card">
                            <div className="trophy-icon">
                                <IonIcon icon={trophyOutline} />
                            </div>
                            <h2>{t('game.roundComplete')}</h2>
                            <p className="game-over-subtitle">{t('sentence.greatJob')}</p>

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

    const currentData = gameData[questionIndex];
    if (!currentData) return null;
    const targetTranslation = getTranslation(currentData);
    const isComplete = availableWords.length === 0;

    return (
        <IonPage>
            <CommonHeader title={t('sentence.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding sentence-content">
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

                    {/* Score */}
                    <div className="game-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('game.score')}</span>
                            <span className="stat-value">{score}</span>
                        </div>
                    </div>

                    {/* Prompt */}
                    <div className="prompt-card">
                        <div className="prompt-label">{t('sentence.translateThis')}</div>
                        <h2 className="prompt-text">{targetTranslation}</h2>
                    </div>

                    {/* Drop Zone (Selected Words) */}
                    <div className={`selected-words-area ${isCorrect === true ? 'correct-bg' : isCorrect === false ? 'incorrect-bg' : ''}`}>
                        {selectedWords.length === 0 && <div className="placeholder-text">{t('sentence.tapWords')}</div>}
                        <div className="words-flex">
                            {selectedWords.map(wordObj => (
                                <button
                                    key={wordObj.id}
                                    className="word-tile selected"
                                    onClick={() => handleRemoveWord(wordObj)}
                                    disabled={isCorrect !== null}
                                >
                                    {wordObj.word}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Feedback / Controls */}
                    <div className="controls-area">
                        {isCorrect === true && (
                            <div className="feedback-message success fade-in">
                                {t('sentence.correct')}
                            </div>
                        )}
                        {isCorrect === false && (
                            <div className="feedback-message error fade-in">
                                {t('sentence.incorrect')}
                            </div>
                        )}

                        <div className="action-buttons">
                            {isCorrect === false && (
                                <IonButton fill="outline" color="danger" onClick={handleRetry}>
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('sentence.retry')}
                                </IonButton>
                            )}

                            {isCorrect === null && isComplete && (
                                <IonButton expand="block" onClick={handleCheckAnswer} className="check-btn">
                                    {t('sentence.check')}
                                </IonButton>
                            )}
                        </div>
                    </div>

                    {/* Available Words */}
                    <div className="available-words-area">
                        <div className="words-flex">
                            {availableWords.map(wordObj => (
                                <button
                                    key={wordObj.id}
                                    className="word-tile available"
                                    onClick={() => handleSelectWord(wordObj)}
                                    disabled={isCorrect !== null}
                                >
                                    {wordObj.word}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default SentenceBuilder;
