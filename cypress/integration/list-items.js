/// <reference types="Cypress" />

describe('Toggle the items in the list', () => {
  beforeEach(() => {
    cy.initialLoadAndWrite();
  });
  it.only('Eggs has to be checked', () => {
    cy.get('.todo-list li').should('have.length', 4);

    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      //   .check();
      .should('be.checked');
  });
});
