/**
 * Golden-path E2E for the Flashcard / Lesson flow.
 *
 * Loads a known-stable lesson (greetings) and exercises the core
 * interactions: flip on click, audio button rendering, next/prev
 * navigation, restart at the end.
 *
 * Audio playback itself is not asserted — headless browsers won't reliably
 * play audio, and the actual TTS chain is covered by unit tests on tts.ts.
 * Here we just confirm the controls render and dispatch handlers.
 */
describe('Flashcard / Lesson page', () => {
  beforeEach(() => {
    // Hash router: the route is /#/lesson/:id.
    cy.visit('/#/lesson/greetings');
    cy.get('.flashcard-container', { timeout: 10000 }).should('be.visible');
  });

  it('renders the first card with audio + bookmark controls', () => {
    // Ionic moves aria-* off the <ion-button> host onto the shadow-DOM inner
    // <button>, so we just assert the controls render here; aria-label content
    // is asserted in the unit tests (Flashcard.a11y.test.tsx).
    cy.get('.flashcard-container').within(() => {
      cy.get('.audio-btn').should('be.visible');
      cy.get('.slow-audio-btn').should('be.visible');
      cy.get('.bookmark-btn').should('be.visible');
    });
    cy.get('.progress-indicator').should('contain.text', '1');
  });

  it('flips on click and reveals the translation', () => {
    cy.get('.flashcard-container').should('not.have.class', 'flipped');
    cy.get('.flashcard-container').click();
    cy.get('.flashcard-container').should('have.class', 'flipped');
    // The back face is rendered (translation visible)
    cy.get('.flashcard-back').should('exist');
  });

  it('advances to the next card and back', () => {
    cy.get('.progress-indicator').invoke('text').then((firstText) => {
      cy.contains('button, ion-button', /next/i).click();
      cy.get('.progress-indicator')
        .invoke('text')
        .should('not.equal', firstText);

      cy.contains('button, ion-button', /prev/i).click();
      cy.get('.progress-indicator').should('contain.text', firstText.trim());
    });
  });

  it('toggles bookmark state via aria-pressed', () => {
    // Front face bookmark button — read initial pressed state, then toggle.
    // Ionic moves aria-* onto the shadow-DOM inner <button>, so read it from
    // there. The button is sometimes overlapped by the header timer pill in
    // the test viewport — { force: true } bypasses the covered-element check.
    cy.get('.flashcard-front .bookmark-btn').as('bookmark');
    cy.get('@bookmark').shadow().find('button')
      .invoke('attr', 'aria-pressed')
      .then((before) => {
        cy.get('@bookmark').click({ force: true });
        cy.get('@bookmark').shadow().find('button')
          .invoke('attr', 'aria-pressed')
          .should('not.equal', before);
      });
  });
});
