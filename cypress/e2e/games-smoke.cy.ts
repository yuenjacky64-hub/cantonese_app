/**
 * Smoke tests for every game route. Each game gets one assertion:
 * "the page mounts and renders a distinguishing element," which is
 * enough to catch a regression where a page-level import breaks the
 * lazy chunk or a runtime error blanks the route.
 *
 * Deeper interaction is covered for Flashcard + ListeningQuiz in the
 * dedicated specs; the rest are smoke-only to keep the CI window
 * small and the suite stable across content tweaks.
 */
type GameRoute = {
  name: string;
  path: string;
  /** A selector that should be visible once the page is mounted. */
  selector: string;
};

const GAMES: GameRoute[] = [
  { name: 'Word Game',         path: '/#/game',       selector: '.game-container' },
  { name: 'Memory Match',      path: '/#/memory',     selector: 'ion-content' },
  { name: 'Spell Challenge',   path: '/#/spell',      selector: 'ion-content' },
  { name: 'Word Scramble',     path: '/#/scramble',   selector: 'ion-content' },
  { name: 'Emoji Guess',       path: '/#/emoji',      selector: '.emoji-game-container' },
  { name: 'Falling Words',     path: '/#/falling',    selector: 'ion-content' },
  { name: 'Sentence Builder',  path: '/#/sentence',   selector: 'ion-content' },
  { name: 'True / False',      path: '/#/truefalse',  selector: 'ion-content' },
];

describe('Games — page smoke', () => {
  for (const game of GAMES) {
    it(`${game.name} mounts at ${game.path}`, () => {
      // Stub audio so any page that auto-plays a clue doesn't fail in
      // headless mode where decoding is unreliable.
      cy.visit(game.path, {
        onBeforeLoad(win) {
          cy.stub(win.HTMLMediaElement.prototype, 'play').resolves();
        },
      });

      // Initial mount may go through Suspense → lazy chunk → game's own
      // bootstrap effects, so give it a generous window.
      cy.get(game.selector, { timeout: 15000 }).should('be.visible');

      // App shell shouldn't crash — IonPage always present.
      cy.get('ion-page').should('exist');
    });
  }
});
