// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:4173/homepage')
    cy.contains('p', 'Opinionated Starter Template')
    cy.contains('label', "What's your name?")
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
      .type('kingyue737')

    cy.contains('button', 'Confirm').click()
    cy.contains('div', 'Hi, kingyue737!')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.contains('div', 'Hi, kingyue737!').should('not.exist')
  })
})
