/*global cy*/

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  describe('Home screen has all elements', () => {
    it('has the right title', () => {
      cy.title().should('be', 'Plant Care App')
    })
  })

  describe('render all cards', () => {
    it('shows all cards', () => {
      cy.get('[data-cy="CardEl"]').should('have.length', 10)
    })
  })
})
