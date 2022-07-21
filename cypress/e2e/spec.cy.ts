it('find movie and show details', () => {
  cy.visit('http://localhost:8080/')

  cy.get('.search-input').type('zootopia');
  cy.get('.search-button').click();

  cy.get('.movie-card-container').should('have.length', 1)
  

  cy.get('.movie-image').click();
  cy.get('.search-button').should('not.exist');
  cy.get('.movie-details').contains('Zootopia');
})