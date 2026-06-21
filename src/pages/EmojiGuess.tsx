import React, { useState, useEffect, useCallback } from 'react';
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/react';
import {
    homeOutline,
    refreshOutline,
    checkmarkCircle,
    closeCircle,
    sparklesOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import { shuffleArray } from '../utils/array';
import { StreakMark, CheckMark, CrossMark, ScoreTierMark } from '../components/Marks';
import './EmojiGuess.css';

// Emoji quiz data - each item has emojis, correct answer, and wrong options
interface EmojiQuestion {
    emojis: string;
    answer: string;
    answerEn: string;
    options: string[];
}

const emojiQuestions: EmojiQuestion[] = [
    { emojis: '🏠', answer: 'Uk kei', answerEn: 'House', options: ['Uk kei', 'Hok haau', 'Gaau tong', 'Dim'] },
    { emojis: '👋😊', answer: 'Nei hou', answerEn: 'Hello', options: ['Nei hou', 'Zoi gin', 'Mgoi', 'Hai'] },
    { emojis: '🙏', answer: 'Mgoi', answerEn: 'Thank you', options: ['Mgoi', 'Deui m ju', 'Ngoi', 'Siu sam'] },
    { emojis: '🌅👋', answer: 'Jou san', answerEn: 'Good Morning', options: ['Jou san', 'Maan on', 'Ngaan on', 'Nei hou'] },
    { emojis: '🌙👋', answer: 'Maan on', answerEn: 'Good Evening', options: ['Maan on', 'Jou san', 'Zoi gin', 'Fan gaau'] },
    { emojis: '❤️', answer: 'Ngoi', answerEn: 'Love', options: ['Ngoi', 'Nau', 'M hoi sam', 'Hoi sam'] },
    { emojis: '😊', answer: 'Hoi sam', answerEn: 'Happy', options: ['Hoi sam', 'M hoi sam', 'Nau', 'Geng'] },
    { emojis: '😢', answer: 'M hoi sam', answerEn: 'Sad', options: ['M hoi sam', 'Hoi sam', 'Nau', 'Toh ngo'] },
    { emojis: '😠', answer: 'Nau', answerEn: 'Angry', options: ['Nau', 'Hoi sam', 'Geng', 'M hoi sam'] },
    { emojis: '🍽️', answer: 'Sik fan', answerEn: 'To eat', options: ['Sik fan', 'Yam sui', 'Fan gaau', 'Waan'] },
    { emojis: '💧🥤', answer: 'Yam sui', answerEn: 'To drink', options: ['Yam sui', 'Sik fan', 'Zyu fan', 'Paau bou'] },
    { emojis: '😴💤', answer: 'Fan gaau', answerEn: 'To sleep', options: ['Fan gaau', 'Hing san', 'Sik fan', 'Waan'] },
    { emojis: '🏃', answer: 'Paau bou', answerEn: 'To run', options: ['Paau bou', 'Hang lou', 'Co', 'Kei'] },
    { emojis: '🚶', answer: 'Hang lou', answerEn: 'To walk', options: ['Hang lou', 'Paau bou', 'Tiu', 'Tiu mou'] },
    { emojis: '📖', answer: 'Syu', answerEn: 'Book', options: ['Syu', 'Yun bat', 'Zi', 'Toi'] },
    { emojis: '✏️', answer: 'Yun bat', answerEn: 'Pencil', options: ['Yun bat', 'Syu', 'Zi', 'Jyun zi bat'] },
    { emojis: '🐕', answer: 'Gau', answerEn: 'Dog', options: ['Gau', 'Maau', 'Jeuk', 'Yu'] },
    { emojis: '🐈', answer: 'Maau', answerEn: 'Cat', options: ['Maau', 'Gau', 'Lou syu', 'Jeuk'] },
    { emojis: '🐟', answer: 'Yu', answerEn: 'Fish', options: ['Yu', 'Gai', 'Zyu', 'Ngau'] },
    { emojis: '🐔', answer: 'Gai', answerEn: 'Chicken', options: ['Gai', 'Aap', 'Jeuk', 'Fo gai'] },
    { emojis: '☀️', answer: 'Taai yeong', answerEn: 'Sun/Day', options: ['Taai yeong', 'Jyut leong', 'Sing', 'Wan'] },
    { emojis: '🌙', answer: 'Jyut leong', answerEn: 'Moon', options: ['Jyut leong', 'Taai yeong', 'Sing', 'Je maan'] },
    { emojis: '⭐', answer: 'Sing', answerEn: 'Star', options: ['Sing', 'Jyut leong', 'Taai yeong', 'Langit'] },
    { emojis: '🌧️', answer: 'Lok yu', answerEn: 'Rain', options: ['Lok yu', 'Fung', 'Taai yeong', 'Wan'] },
    { emojis: '💨', answer: 'Fung', answerEn: 'Wind', options: ['Fung', 'Lok yu', 'Toi fung', 'Wan'] },
    { emojis: '🌊', answer: 'Hoi', answerEn: 'Sea', options: ['Hoi', 'Ho', 'Wu', 'Puk bou'] },
    { emojis: '⛰️', answer: 'Saan', answerEn: 'Mountain', options: ['Saan', 'Saan', 'Guk', 'Sam lam'] },
    { emojis: '🌳', answer: 'Syu mu', answerEn: 'Tree', options: ['Syu mu', 'Fa', 'Chou', 'Yip'] },
    { emojis: '🌸', answer: 'Fa', answerEn: 'Flower', options: ['Fa', 'Syu mu', 'Yip', 'Sanggwo'] },
    { emojis: '🍎', answer: 'Sanggwo', answerEn: 'Fruit', options: ['Sanggwo', 'Choy', 'Sik mat', 'Ping gwo'] },
    { emojis: '👨', answer: 'Naam yan', answerEn: 'Man', options: ['Naam yan', 'Loi yan', 'Sai lou go', 'Lou yan'] },
    { emojis: '👩', answer: 'Loi yan', answerEn: 'Woman', options: ['Loi yan', 'Naam yan', 'Sai lou go', 'Po po'] },
    { emojis: '👶', answer: 'BB', answerEn: 'Baby', options: ['BB', 'Sai lou go', 'Lou yan', 'Zai lui'] },
    { emojis: '👴👵', answer: 'Lou yan', answerEn: 'Elder', options: ['Lou yan', 'Sai lou go', 'BB', 'Fu mou'] },
    { emojis: '👨‍👩‍👧', answer: 'Ga ting', answerEn: 'Family', options: ['Ga ting', 'Pang yau', 'Lan geui', 'Can cik'] },
    { emojis: '👫', answer: 'Pang yau', answerEn: 'Friend', options: ['Pang yau', 'Dik yan', 'Lyun yan', 'Hing dai'] },
    { emojis: '💑', answer: 'Lyun yan', answerEn: 'Sweetheart', options: ['Lyun yan', 'Pang yau', 'Hing dai', 'Lou gung'] },
    { emojis: '🏫', answer: 'Hok haau', answerEn: 'School', options: ['Hok haau', 'Uk kei', 'Ospital', 'Gaau tong'] },
    { emojis: '⛪', answer: 'Gaau tong', answerEn: 'Church', options: ['Gaau tong', 'Hok haau', 'Uk kei', 'Gai si'] },
    { emojis: '🏥', answer: 'Ospital', answerEn: 'Hospital', options: ['Ospital', 'Hok haau', 'Uk kei', 'Yeuk fong'] },
    { emojis: '🛒', answer: 'Gai si', answerEn: 'Market', options: ['Gai si', 'Dim', 'Soeng coeng', 'Ospital'] },
    { emojis: '🚗', answer: 'Ce', answerEn: 'Car', options: ['Ce', 'Ba si', 'Fo ce', 'Daan ce'] },
    { emojis: '🚌', answer: 'Ba si', answerEn: 'Ba si', options: ['Ba si', 'Ce', 'Siu ba', 'Fo ce'] },
    { emojis: '✈️', answer: 'Fei gei', answerEn: 'Airplane', options: ['Fei gei', 'Syun', 'Fo ce', 'Zik sing gei'] },
    { emojis: '🚢', answer: 'Syun', answerEn: 'Ship', options: ['Syun', 'Siu syun', 'Fei gei', 'Ce'] },
    { emojis: '👁️', answer: 'Ngaan', answerEn: 'Eye', options: ['Ngaan', 'Bei go', 'Zui', 'Yi zai'] },
    { emojis: '👃', answer: 'Bei go', answerEn: 'Nose', options: ['Bei go', 'Ngaan', 'Zui', 'Ngak tau'] },
    { emojis: '👄', answer: 'Zui', answerEn: 'Mouth', options: ['Zui', 'Bei go', 'Yi zai', 'Nga'] },
    { emojis: '👂', answer: 'Yi zai', answerEn: 'Ear', options: ['Yi zai', 'Ngaan', 'Bei go', 'Tau faat'] },
    { emojis: '✋', answer: 'Sau', answerEn: 'Hand', options: ['Sau', 'Goek', 'Sau bei', 'Sau zi'] },
];

const QUESTIONS_PER_GAME = 10;

const EmojiGuess: React.FC = () => {
    const { t } = useTranslation();

    const [questions, setQuestions] = useState<EmojiQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    // Initialize game
    const initGame = useCallback(() => {
        const shuffledQuestions = shuffleArray(emojiQuestions).slice(0, QUESTIONS_PER_GAME);
        setQuestions(shuffledQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameOver(false);
        setStreak(0);

        if (shuffledQuestions.length > 0) {
            // Bounds-checked by the length guard above.
            setShuffledOptions(shuffleArray(shuffledQuestions[0]!.options));
        }
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame]);

    // Update shuffled options when question changes
    useEffect(() => {
        if (questions[currentIndex]) {
            setShuffledOptions(shuffleArray(questions[currentIndex].options));
        }
    }, [currentIndex, questions]);

    const currentQuestion = questions[currentIndex];

    const handleAnswer = (answer: string) => {
        if (selectedAnswer !== null || !currentQuestion) return; // Prevent double-click

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
            setStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak > bestStreak) {
                    setBestStreak(newStreak);
                }
                return newStreak;
            });
        } else {
            setStreak(0);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (currentIndex + 1 >= QUESTIONS_PER_GAME) {
                setGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            }
        }, 1500);
    };

    const scorePercentage = (score / QUESTIONS_PER_GAME) * 100;

    const getScoreMessage = () => {
        const percentage = (score / QUESTIONS_PER_GAME) * 100;
        if (percentage === 100) return t('emoji.perfect');
        if (percentage >= 80) return t('emoji.excellent');
        if (percentage >= 60) return t('emoji.good');
        if (percentage >= 40) return t('emoji.keepLearning');
        return t('emoji.tryAgain');
    };

    if (!currentQuestion && !gameOver) {
        return null;
    }
    // After the guard, currentQuestion is only undefined when gameOver
    // is true (and the gameOver branch below doesn't read it). Narrow
    // the in-game branch's type.
    const activeQuestion = currentQuestion as NonNullable<typeof currentQuestion>;

    return (
        <IonPage>
            <CommonHeader title={t('emoji.title')} showBackButton defaultHref="/home" />

            <IonContent className="emoji-game-content">
                {!gameOver ? (
                    <div className="emoji-game-container">
                        {/* Progress Bar */}
                        <div className="emoji-progress-bar">
                            <div
                                className="emoji-progress-fill"
                                style={{ transform: `scaleX(${((currentIndex + 1) / QUESTIONS_PER_GAME)})` }}
                            />
                        </div>

                        {/* Stats Row */}
                        <div className="emoji-stats-row">
                            <div className="emoji-stat">
                                <span className="stat-label">{t('emoji.question')}</span>
                                <span className="stat-value">{currentIndex + 1}/{QUESTIONS_PER_GAME}</span>
                            </div>
                            <div className="emoji-stat">
                                <span className="stat-label">{t('emoji.score')}</span>
                                <span className="stat-value">{score}</span>
                            </div>
                            {streak >= 2 && (
                                <div className="emoji-stat streak">
                                    <IonIcon icon={sparklesOutline} />
                                    <span className="stat-value">{streak}</span>
                                    <StreakMark size={14} />
                                </div>
                            )}
                        </div>

                        {/* Emoji Display */}
                        <div className="emoji-display-card">
                            <div className="emoji-display">{activeQuestion.emojis}</div>
                            <p className="emoji-hint">{t('emoji.whatWord')}</p>
                        </div>

                        {/* Answer Options */}
                        <div className="emoji-options-grid">
                            {shuffledOptions.map((option, idx) => {
                                let optionClass = 'emoji-option';
                                if (selectedAnswer !== null) {
                                    if (option === activeQuestion.answer) {
                                        optionClass += ' correct';
                                    } else if (option === selectedAnswer && !isCorrect) {
                                        optionClass += ' wrong';
                                    } else {
                                        optionClass += ' faded';
                                    }
                                }

                                return (
                                    <button
                                        key={idx}
                                        className={optionClass}
                                        onClick={() => handleAnswer(option)}
                                        disabled={selectedAnswer !== null}
                                    >
                                        <span className="option-text">{option}</span>
                                        {selectedAnswer !== null && option === activeQuestion.answer && (
                                            <IonIcon icon={checkmarkCircle} className="result-icon correct" />
                                        )}
                                        {selectedAnswer === option && !isCorrect && (
                                            <IonIcon icon={closeCircle} className="result-icon wrong" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Answer Feedback */}
                        {selectedAnswer !== null && (
                            <div className={`emoji-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                                <span className="feedback-emoji">{isCorrect ? <CheckMark size={22} /> : <CrossMark size={22} />}</span>
                                <span className="feedback-text">
                                    {isCorrect ? t('emoji.correct') : `${t('emoji.wrong')} ${activeQuestion.answer}`}
                                </span>
                                <span className="feedback-translation">({activeQuestion.answerEn})</span>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Game Over Screen */
                    <div className="emoji-game-over">
                        <div className="game-over-card">
                            <div className="score-emoji"><ScoreTierMark percentage={scorePercentage} /></div>
                            <h2 className="score-title">{getScoreMessage()}</h2>

                            <div className="final-score">
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/ {QUESTIONS_PER_GAME}</span>
                                </div>
                            </div>

                            {bestStreak >= 3 && (
                                <div className="streak-badge">
                                    <IonIcon icon={sparklesOutline} />
                                    <span>{t('emoji.bestStreak')}: {bestStreak}</span>
                                    <StreakMark size={14} />
                                </div>
                            )}

                            <div className="game-over-actions">
                                <IonButton expand="block" onClick={initGame} className="play-again-btn">
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('emoji.playAgain')}
                                </IonButton>
                                <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
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

export default EmojiGuess;
