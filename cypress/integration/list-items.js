/// <reference types="Cypress" />

describe('Toggle the items in the list', () => {
  beforeEach(() => {
    cy.initialLoadAndWrite();
  });

  it('Eggs has to be checked', () => {
    cy.get('.todo-list li').should('have.length', 4);

    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      //   .check();
      .should('be.checked');
  });

  it('Footer has to show correct no of todos left', () => {
    cy.get('.todo-count').should('contain', 3);
  });

  it('Delete a todo item onclick of cross button', () => {
    cy.route({
      method: 'DELETE',
      url: '/api/todos/1',
      status: 200,
      response: {},
    });

    // getting hold of the list
    cy.get('.todo-list li').as('list');

    // deleting the todo
    cy.get('@list').first().find('.destroy').invoke('show').click();

    // expecting the remaining todos are 3
    cy.get('@list').should('have.length', 3).and('not.contain', 'Milk');
  });
});
