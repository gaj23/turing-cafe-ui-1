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

  describe('Reservation Form', () => {
    beforeEach(() => {
      cy.fixture('example-data.json')
        .then(data => {
          cy.intercept(baseURL, {
            body: data.reservations
          })
        })
      cy.visit('http://localhost:3000');
    })

    it('Should update value based on user input', () => {
      cy.get('form input[name=name]').type('Gabrielle').should('have.value', 'Gabrielle')
      cy.get('form input[name=date]').type('02/17').should('have.value', '02/17')
      cy.get('form input[name=time]').type('12:45').should('have.value', '12:45')
      cy.get('form input[name=number]').type('8').should('have.value', '8')
      cy.get('form button').click();
    })

    it('Should have new reservation when submitted', () => {
      cy.get('form input[name=name]').type('Gabrielle')
      cy.get('form input[name=date]').type('02/17')
      cy.get('form input[name=time]').type('12:45')
      cy.get('form input[name=number]').type('8')
      cy.get('form button').click();
      cy.get('section article').should('contain', 'Gabrielle')
    })
  })

  describe('Error Handling', () => {
    beforeEach(() => {
      cy.fixture('example-data.json')
        .then(data => {
          cy.intercept(baseURL, {
            statusCode: 404
          })
        })
      cy.visit('http://localhost:3000');
    })

    it('Should display if there\'s been an error', () => {
      cy.get('img')
    })
  })

  describe.only('Loading Message', () => {
    beforeEach(() => {
      cy.fixture('example-data.json')
        .then(data => {
          cy.intercept(baseURL, {
            body: data.reservations
          })
        })
      cy.visit('http://localhost:3000');
    })

    it('Should display if the page is loading', () => {
      cy.get('h2').contains('Please wait')
    })
  })
})
