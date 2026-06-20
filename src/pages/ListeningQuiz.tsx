import React, { useState, useEffect, useCallback, useRef } from 'react';
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/react';
import {
    homeOutline,
    refreshOutline,
    checkmarkCircle,
    closeCircle,
    volumeHighOutline,
    earOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import { lessons } from '../data/lessons';
import { getRandomElements, shuffleArray } from '../utils/array';
import { fetchTTS } from '../utils/tts';
import { CheckMark, CrossMark, ScoreTierMark } from '../components/Marks';
import './ListeningQuiz.css';

// Get all words from lessons for the quiz (computed once)
const ALL_WORDS = (() => {
    const words: { cantonese: string; english: string }[] = [];
    lessons.forEach(lesson => {
        lesson.cards.forEach(card => {
            // Only include single words or short phrases (max 3 words)
            if (card.cantonese.split(' ').length <= 3) {
                words.push({ cantonese: card.cantonese, english: card.english });
            }
        });
    });
    return words;
})();

interface QuizQuestion {
    word: { cantonese: string; english: string };
    options: { cantonese: string; english: string }[];
}

const QUESTIONS_PER_GAME = 10;

// Module-level cache for audio map promise to persist across remounts and prevent redundant fetches
let cachedAudioMapPromise: Promise<Record<string, { normal: string }> | null> | null = null;

const getAudioMap = () => {
    if (!cachedAudioMapPromise) {
        cachedAudioMapPromise = fetch(`${import.meta.env.BASE_URL}audio/audio-map.json`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch audio map');
                return response.json();
            })
            .catch(e => {
                console.log('Audio map fetch failed:', e);
                return null;
            });
    }
    return cachedAudioMapPromise;
};

const ListeningQuiz: React.FC = () => {
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);

    // Preload audio map
    useEffect(() => {
        getAudioMap();
    }, []);

    // Generate questions
    const generateQuestions = useCallback((): QuizQuestion[] => {
        const selectedWords = getRandomElements(ALL_WORDS, QUESTIONS_PER_GAME);

        return selectedWords.map(word => {
            const usedTags = new Set<string>([word.cantonese]);
            const wrongAnswers = getRandomElements(
                ALL_WORDS,
                3,
                (candidate) => {
                    if (usedTags.has(candidate.cantonese)) return true;
                    usedTags.add(candidate.cantonese);
                    return false;
                }
            );

            // Combine with correct answer and shuffle
            const options = shuffleArray([word, ...wrongAnswers]);

            return { word, options };
        });
    }, []);

    // Initialize game
    const initGame = useCallback(() => {
        const newQuestions = generateQuestions();
        setQuestions(newQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameOver(false);
        setHasPlayed(false);
    }, [generateQuestions]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    const currentQuestion = questions[currentIndex];

    // Play audio for the current word
    const playAudio = async () => {
        if (!currentQuestion || isPlaying) return;

        setIsPlaying(true);
        setHasPlayed(true);

        const text = currentQuestion.word.cantonese;

        // Try local audio first
        try {
            const audioMap = await getAudioMap();
            const audioPath = audioMap ? audioMap[text]?.normal : null;

            if (audioPath) {
                const fullPath = `${import.meta.env.BASE_URL}${audioPath}`;

                if (audioRef.current) {
                    audioRef.current.src = fullPath;
                    audioRef.current.onended = () => setIsPlaying(false);
                    audioRef.current.onerror = () => {
                        console.log('Local audio failed, trying Cloud TTS');
                        playCloudTTS(text);
                    };
                    await audioRef.current.play();
                    return;
                }
            } else {
                console.log('No local audio found, trying Cloud TTS');
            }
        } catch (e) {
            console.log('Audio map fetch failed:', e);
        }

        // Fallback to Google Cloud TTS
        playCloudTTS(text);
    };

    // Google Cloud TTS API fallback — reuses audioRef so unmount/question-change
    // cleanup can stop the playback.
    const playCloudTTS = async (text: string) => {
        try {
            const audioContent = await fetchTTS({
                text,
                languageCode: 'yue-HK',
                voiceName: 'yue-HK-Standard-A',
            });

            if (audioContent && audioRef.current) {
                audioRef.current.src = `data:audio/mp3;base64,${audioContent}`;
                audioRef.current.onended = () => setIsPlaying(false);
                audioRef.current.onerror = () => setIsPlaying(false);
                await audioRef.current.play();
                return;
            }
        } catch (error) {
            console.error('Cloud TTS failed:', error);
        }
        setIsPlaying(false);
    };

    // Auto-play on question change. Pauses any in-flight audio when the question
    // changes or the component unmounts so navigation doesn't leak playback.
    useEffect(() => {
        if (currentQuestion && !gameOver) {
            // Capture the audio element now; the cleanup may run after the
            // ref has been reassigned.
            const audioEl = audioRef.current;
            const timer = setTimeout(() => {
                playAudio();
            }, 500);
            return () => {
                clearTimeout(timer);
                if (audioEl) {
                    audioEl.pause();
                }
            };
        }
        // playAudio is intentionally omitted — it depends on currentQuestion/isPlaying
        // which would cause unwanted replays.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, questions, gameOver]);

    const handleAnswer = (answer: string) => {
        if (selectedAnswer !== null || !hasPlayed) return;

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.word.cantonese;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 1);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (currentIndex + 1 >= QUESTIONS_PER_GAME) {
                setGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
                setHasPlayed(false);
            }
        }, 2000);
    };

    const scorePercentage = (score / QUESTIONS_PER_GAME) * 100;

    const getScoreMessage = () => {
        const percentage = (score / QUESTIONS_PER_GAME) * 100;
        if (percentage === 100) return t('listening.perfect');
        if (percentage >= 80) return t('listening.excellent');
        if (percentage >= 60) return t('listening.good');
        if (percentage >= 40) return t('listening.keepLearning');
        return t('listening.tryAgain');
    };

    if (!currentQuestion && !gameOver) {
        return null;
    }

    return (
        <IonPage>
            <CommonHeader title={t('listening.title')} showBackButton defaultHref="/home" />
            <audio ref={audioRef} />

            <IonContent className="listening-game-content">
                {!gameOver ? (
                    <div className="listening-game-container">
                        {/* Progress Bar */}
                        <div className="listening-progress-bar">
                            <div
                                className="listening-progress-fill"
                                style={{ transform: `scaleX(${((currentIndex + 1) / QUESTIONS_PER_GAME)})` }}
                            />
                        </div>

                        {/* Stats Row */}
                        <div className="listening-stats-row">
                            <div className="listening-stat">
                                <span className="stat-label">{t('listening.question')}</span>
                                <span className="stat-value">{currentIndex + 1}/{QUESTIONS_PER_GAME}</span>
                            </div>
                            <div className="listening-stat">
                                <span className="stat-label">{t('listening.score')}</span>
                                <span className="stat-value">{score}</span>
                            </div>
                        </div>

                        {/* Audio Player Card */}
                        <div className="audio-player-card">
                            <button
                                className={`play-audio-btn ${isPlaying ? 'playing' : ''}`}
                                onClick={playAudio}
                                disabled={isPlaying}
                            >
                                <IonIcon icon={isPlaying ? earOutline : volumeHighOutline} />
                            </button>
                            <p className="audio-hint">
                                {hasPlayed ? t('listening.tapAgain') : t('listening.tapToListen')}
                            </p>
                        </div>

                        {/* Answer Options */}
                        <div className="listening-options-grid">
                            {currentQuestion.options.map((option, idx) => {
                                let optionClass = 'listening-option';
                                if (selectedAnswer !== null) {
                                    if (option.cantonese === currentQuestion.word.cantonese) {
                                        optionClass += ' correct';
                                    } else if (option.cantonese === selectedAnswer && !isCorrect) {
                                        optionClass += ' wrong';
                                    } else {
                                        optionClass += ' faded';
                                    }
                                }
                                if (!hasPlayed) {
                                    optionClass += ' disabled';
                                }

                                // Hide jyutping until an answer is selected so the user
                                // has to actually listen — otherwise reading the romanization
                                // lets them pass without engaging the audio.
                                const revealJyutping = selectedAnswer !== null;
                                return (
                                    <button
                                        key={idx}
                                        className={optionClass}
                                        onClick={() => handleAnswer(option.cantonese)}
                                        disabled={selectedAnswer !== null || !hasPlayed}
                                    >
                                        {revealJyutping && (
                                            <span className="option-cantonese">{option.cantonese}</span>
                                        )}
                                        <span className="option-english">{option.english}</span>
                                        {selectedAnswer !== null && option.cantonese === currentQuestion.word.cantonese && (
                                            <IonIcon icon={checkmarkCircle} className="result-icon correct" />
                                        )}
                                        {selectedAnswer === option.cantonese && !isCorrect && (
                                            <IonIcon icon={closeCircle} className="result-icon wrong" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Answer Feedback */}
                        {selectedAnswer !== null && (
                            <div className={`listening-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                                <span className="feedback-emoji">{isCorrect ? <CheckMark size={22} /> : <CrossMark size={22} />}</span>
                                <span className="feedback-text">
                                    {isCorrect ? t('listening.correct') : `${t('listening.wrong')} ${currentQuestion.word.cantonese}`}
                                </span>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Game Over Screen */
                    <div className="listening-game-over">
                        <div className="game-over-card">
                            <div className="score-emoji"><ScoreTierMark percentage={scorePercentage} /></div>
                            <h2 className="score-title">{getScoreMessage()}</h2>

                            <div className="final-score">
                                <div className="score-circle">
                                    <span className="score-number">{score}</span>
                                    <span className="score-total">/ {QUESTIONS_PER_GAME}</span>
                                </div>
                            </div>

                            <div className="game-over-actions">
                                <IonButton expand="block" onClick={initGame} className="play-again-btn">
                                    <IonIcon icon={refreshOutline} slot="start" />
                                    {t('listening.playAgain')}
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

export default ListeningQuiz;
