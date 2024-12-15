import "allure-cypress";
import selectors from "../fixtures/pageObjects/loginPage";
import mainPageSelectors from "../fixtures/pageObjects/mainPage";

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('frontBaseUrl') + '/login');
  });

  it('Using a valid login and password, get access', () => {
    cy.get(selectors.locators.email).type(selectors.data.email);
    cy.get(selectors.locators.password).type(selectors.data.password);
    cy.get(selectors.locators.loginButton).click();
    cy.get(mainPageSelectors.locators.navigationBar, {timeout: 1000000}).should('exist');
  });

  it('Invalid login test, wrong login information ', () => {
    cy.get(selectors.locators.email).type(selectors.data.wrongEmail);
    cy.get(selectors.locators.password).type(selectors.data.wrongPassword);
    cy.get(selectors.locators.loginButton).click();
    //There is a bug within the web page code. The page is listing the close button as a string x, so this assertion must be fixed once the application code is corrected.
    cy.get(selectors.locators.loginFailureWarning).should('have.text', '×Email e/ou senha inválidos');
  });
});
