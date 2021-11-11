describe('The application loads', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('navigates to the / route', () => {});

  it('has the basic Todo list container', () => {
    cy.get('.todo-list').should('exist');
    // cy.screenshot();
  });

  it('has the auto focused and enter a value', () => {
    const item1 = 'Buy vegetables';

    cy.focused().should('have.class', 'new-todo');
    cy.get('.new-todo').type(item1).should('have.value', item1);
    // cy.screenshot();
    // cy.get('.new-todo')
  });

  context('add a todo to the list', () => {
    it.only('add a item', () => {
      let i = 1;
      cy.server();
      cy.route('POST', '/api/todos', {
        name: 'Buy eggs',
        isCompleted: false,
        id: i,
      });

      cy.get('.new-todo').type('Buy eggs').type('{enter}');

      cy.get('.todo-list li').should('have.length', 1);
    });
  });
});
