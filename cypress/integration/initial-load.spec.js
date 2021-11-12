/// <reference types="Cypress" />

describe('Show list of todos on initial load of page', () => {
  it.only('initial load', () => {
    cy.server();
    cy.route('GET', '/api/todos', 'fixture:listOfTodos');
    cy.visit('/');

    cy.get('.todo-list li').should('have.length', 4);
  });
});
