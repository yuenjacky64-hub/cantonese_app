import React, { useEffect, Suspense, lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import ReloadPrompt from './components/ReloadPrompt';
import { TimerProvider } from './context/TimerContext';

/* Lazy-loaded page components for code splitting optimization.
 * This ensures that the initial bundle size is smaller and pages are loaded only when needed.
 */
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

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

/**
 * Loading Component for Suspense fallback
 * Shows a centered spinner while lazy components are loading
 */
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

/**
 * Main Application Component.
 *
 * Sets up:
 * - Routing (HashRouter)
 * - Global Providers (TimerProvider)
 * - Theme Initialization
 * - PWA Reload Prompt
 * - Suspense for lazy loading
 */
const App: React.FC = () => {

  // Initialize theme from local storage on app start
  useEffect(() => {
    console.log('[Debug] App initializing...');
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    console.log(`[Debug] Loading saved theme: ${savedTheme}`);
    document.body.className = savedTheme;
  }, []);

  return (
    <IonApp>
      {/* PWA Update Prompt */}
      <ReloadPrompt />

      <IonReactHashRouter>
        {/* Timer Provider tracks study time across routes */}
        <TimerProvider>
          <Suspense fallback={<PageLoader />}>
            {/* Router Outlet for handling navigation */}
            <IonRouterOutlet animated={false}>
              <Route exact path="/home"><Home /></Route>
              <Route exact path="/lesson/:id"><Lesson /></Route>
              <Route exact path="/review"><Review /></Route>
              <Route exact path="/intro"><Intro /></Route>
              <Route exact path="/game"><Game /></Route>
              <Route exact path="/memory"><MemoryMatch /></Route>
              <Route exact path="/spell"><SpellChallenge /></Route>
              <Route exact path="/scramble"><WordScramble /></Route>
              <Route exact path="/emoji"><EmojiGuess /></Route>
              <Route exact path="/falling"><FallingWords /></Route>
              <Route exact path="/listening"><ListeningQuiz /></Route>
              <Route exact path="/sentence"><SentenceBuilder /></Route>
              <Route exact path="/truefalse"><TrueFalse /></Route>
              <Route exact path="/"><Redirect to="/home" /></Route>
            </IonRouterOutlet>
          </Suspense>
        </TimerProvider>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
