import "allure-cypress";

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('frontBaseUrl') + '/login');
  });

  it('Using a valid login and password, get access', () => {
    cy.get('[data-testid="email"]').type('arthurberte@qa.com');
    cy.get('[data-testid="senha"]').type('SuperSafePassword01!');
    cy.get('[data-testid="entrar"]').click();
    cy.get('#navbarTogglerDemo01', {timeout: 1000000}).should('exist');
  });

  it('Invalid login test, wrong login information ', () => {
    cy.get('#email').type('qa@qa.com');
    cy.get('#password').type('teste');
    cy.get('[class="btn btn-primary"]').click();
    //There is a bug within the web page code. The page is listing the close button as a string x, so this assertion must be fixed once the application code is corrected.
    cy.get('[class="alert alert-secondary alert-dismissible"]').should('have.text', '×Email e/ou senha inválidos');
  });
});
