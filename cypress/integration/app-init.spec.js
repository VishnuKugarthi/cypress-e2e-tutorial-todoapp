/// <reference types="Cypress" />

describe('Show list of todos on initial load of page', () => {
  it('initial load', () => {
    // cy.server();
    // cy.route('GET', '/api/todos', 'fixture:listOfTodos');
    // cy.visit('/');

    cy.initialLoadAndWrite();

    cy.get('.todo-list li').should('have.length', 4);
  });

  it('if initial load fails', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/todos',
      status: 500,
      response: {},
    });

    cy.visit('/');

    cy.get('.todo-list li').should('not.exist');
    cy.get('.error').should('be.visible');
  });
});
