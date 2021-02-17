describe('Turing Cafe', () => {
  const baseURL = 'http://localhost:3001'

  describe('Landing Page', () => {
    beforeEach(() => {
      cy.fixture('example-data.json')
        .then(data => {
          cy.intercept(baseURL, {
            body: data.reservations
          })
        })
      cy.visit('http://localhost:3000');
    })

    it('Should have a title', () => {
      cy.get('h1').contains('Turing Cafe Reservations')
    })

    it('Should have a reservation form', () => {
      cy.get('form').should('be.visible')
    })

    it('Should have a area to display reservations', () => {
      cy.get('section').should('contain', 'Maureen')
    })

  })





})
