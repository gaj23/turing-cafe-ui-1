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
      
    })

    it('Should have a reservation form', () => {
    })

    it('Should have a area to display reservations', () => {
    })

  })





})
