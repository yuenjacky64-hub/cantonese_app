describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    // We expect the main app content to load eventually
    // 'Welcome to Tagalog Anywhere' or some main element.
    cy.get('ion-app').should('exist')
  })
})