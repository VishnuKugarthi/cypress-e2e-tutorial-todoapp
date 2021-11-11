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
});
