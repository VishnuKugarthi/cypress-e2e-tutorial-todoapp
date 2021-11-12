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

  describe('add a todo to the list', () => {
    it('add a item', () => {
      let i = 1;
      cy.server();
      cy.route('POST', '/api/todos', {
        name: 'Buy eggs',
        isCompleted: false,
        id: i,
      });

      cy.get('.new-todo').type('Buy eggs').type('{enter}');

      cy.get('.todo-list li').should('have.length', 1);

      cy.get('.new-todo').should('have.value', '');
    });

    it('Show error wen adding an item', () => {
      cy.server();
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {},
      });

      cy.get('.new-todo').type('Buy milk').type('{enter}');

      cy.get('.error').should('have.text', 'Something went wrong.');
    });
  });
});
