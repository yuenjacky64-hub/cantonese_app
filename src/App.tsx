import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IonApp, IonSpinner, setupIonicReact } from '@ionic/react';
import ReloadPrompt from './components/ReloadPrompt';
import { TimerProvider } from './context/TimerContext';

/* Lazy-loaded page components */
const Home = lazy(() => import('./pages/Home'));
const Lesson = lazy(() => import('./pages/Lesson'));
const Review = lazy(() => import('./pages/Review'));
const Intro = lazy(() => import('./pages/Intro'));
const Game = lazy(() => import('./pages/Game'));
const MemoryMatch = lazy(() => import('./pages/MemoryMatch'));
const SpellChallenge = lazy(() => import('./pages/SpellChallenge'));
const WordScramble = lazy(() => import('./pages/WordScramble'));
const EmojiGuess = lazy(() => import('./pages/EmojiGuess'));
const FallingWords = lazy(() => import('./pages/FallingWords'));
const ListeningQuiz = lazy(() => import('./pages/ListeningQuiz'));
const SentenceBuilder = lazy(() => import('./pages/SentenceBuilder'));
const TrueFalse = lazy(() => import('./pages/TrueFalse'));

/* Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const PageLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--ion-background-color)'
  }}>
    <IonSpinner name="crescent" color="primary" style={{ width: '48px', height: '48px' }} />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    if (document.body.className !== savedTheme) {
      document.body.className = savedTheme;
    }
  }, []);

  return (
    <IonApp>
      <ReloadPrompt />
      <HashRouter>
        <TimerProvider>
          <Suspense fallback={<PageLoader />}>
            <div id="app-router">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/lesson/:id" element={<Lesson />} />
                <Route path="/review" element={<Review />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/game" element={<Game />} />
                <Route path="/memory" element={<MemoryMatch />} />
                <Route path="/spell" element={<SpellChallenge />} />
                <Route path="/scramble" element={<WordScramble />} />
                <Route path="/emoji" element={<EmojiGuess />} />
                <Route path="/falling" element={<FallingWords />} />
                <Route path="/listening" element={<ListeningQuiz />} />
                <Route path="/sentence" element={<SentenceBuilder />} />
                <Route path="/truefalse" element={<TrueFalse />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </div>
          </Suspense>
        </TimerProvider>
      </HashRouter>
    </IonApp>
  );
};

export default App;
