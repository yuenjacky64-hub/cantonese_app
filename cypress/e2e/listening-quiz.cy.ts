/**
 * Golden-path E2E for the Listening Quiz.
 *
 * Stubs the audio-map.json response so the test is deterministic
 * regardless of what's on disk, and intercepts the play() call so we
 * don't actually need audio decoding in the headless browser. Then
 * walks through one question: play -> pick an answer -> see feedback.
 */
describe('Listening Quiz page', () => {
  beforeEach(() => {
    // Stub audio map with a single well-known phrase so option lookups
    // resolve to a valid path. Quiz still picks 10 random words from the
    // actual lessons data, so the *path* may not match — we don't care,
    // because we stub <audio>.play() to resolve without network.
    cy.intercept('GET', '**/audio/audio-map.json', {
      statusCode: 200,
      body: {},
    }).as('audioMap');

    cy.visit('/#/listening', {
      onBeforeLoad(win) {
        // Stub HTMLMediaElement.play so the click path never actually
        // tries to fetch / decode an mp3. Resolves like a real play().
        cy.stub(win.HTMLMediaElement.prototype, 'play').as('audioPlay').resolves();
      },
    });

    cy.get('.audio-player-card', { timeout: 10000 }).should('be.visible');
  });

  it('renders one of ten questions with disabled options before playback', () => {
    cy.get('.listening-stat').first().should('contain.text', '1/10');
    cy.get('.play-audio-btn').should('have.attr', 'aria-label');
    cy.get('.listening-option').should('have.length', 4);
    cy.get('.listening-option.disabled').should('have.length', 4);
  });

  it('enables answer options after the play button is tapped', () => {
    cy.get('.play-audio-btn').click();
    // The audio path falls through to playCloudTTS on miss; isPlaying
    // resets via the audio element's onended/onerror or the cloud TTS
    // promise chain. We only assert that the disabled overlay drops.
    cy.get('.listening-option', { timeout: 10000 })
      .not('.disabled')
      .should('have.length', 4);
  });

  it('shows feedback after picking an answer', () => {
    cy.get('.play-audio-btn').click();
    cy.get('.listening-option').not('.disabled').first().click();
    cy.get('.listening-feedback').should('be.visible');
    // Either correct or wrong feedback class is applied
    cy.get('.listening-feedback').should(($el) => {
      const cls = $el.attr('class') || '';
      const hasOutcomeClass = cls.includes('correct') || cls.includes('wrong');
      expect(hasOutcomeClass, 'feedback has correct/wrong class').to.equal(true);
    });
  });
});
