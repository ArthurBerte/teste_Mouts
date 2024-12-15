import "cypress-xpath";
import "allure-cypress";
import selectors from "../fixtures/pageObjects/loginPage";
import mainPageSelectors from "../fixtures/pageObjects/mainPage";
import registerNewUserSelectors from "../fixtures/pageObjects/registerNewUserPage";

describe('User registry tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('frontBaseUrl') + '/login');
    });

    it('Register a new non-admin user', () => {
        cy.get(selectors.locators.newUserLinkAndButton).click();
        cy.get(registerNewUserSelectors.locators.newUserNameField).type(registerNewUserSelectors.data.nonAdminName);
        cy.get(registerNewUserSelectors.locators.newUserEmailField).type(registerNewUserSelectors.data.nonAdminEmail);
        cy.get(registerNewUserSelectors.locators.newUserPasswordField).type(registerNewUserSelectors.data.nonAdminPassword);
        cy.get(selectors.locators.newUserLinkAndButton).click();
        cy.get(registerNewUserSelectors.locators.newUserRegisterSuccessMessage).should('have.text', '×Cadastro realizado com sucesso');
    });

    it('Register a new admin user', () => {
        cy.get(selectors.locators.newUserLinkAndButton).click();
        cy.get(registerNewUserSelectors.locators.newUserNameField).type(registerNewUserSelectors.data.adminName);
        cy.get(registerNewUserSelectors.locators.newUserEmailField).type(registerNewUserSelectors.data.adminEmail);
        cy.get(registerNewUserSelectors.locators.newUserPasswordField).type(registerNewUserSelectors.data.adminPassword);
        cy.get(selectors.locators.newUserLinkAndButton).click();
        cy.get(registerNewUserSelectors.locators.newUserRegisterSuccessMessage).should('have.text', '×Cadastro realizado com sucesso');
    });

    it('Deleting a non admin user', () => {
        cy.get(selectors.locators.email).type(selectors.data.email);
        cy.get(selectors.locators.password).type(selectors.data.password);
        cy.get(selectors.locators.loginButton).click();
        cy.get(mainPageSelectors.locators.listUsersLink).click();
        cy.xpath(registerNewUserSelectors.locators.scrollNotAnAdminUserIntoView).scrollIntoView();
        cy.xpath(registerNewUserSelectors.locators.notAnAdminDeleteButton).click();
        cy.xpath(registerNewUserSelectors.locators.scrollNotAnAdminUserIntoView).should('not.exist');
    });

    it('Deleting an admin user', () => {
        cy.get(selectors.locators.email).type(selectors.data.email);
        cy.get(selectors.locators.password).type(selectors.data.password);
        cy.get(selectors.locators.loginButton).click();
        cy.get(mainPageSelectors.locators.listUsersLink).click();
        cy.xpath(registerNewUserSelectors.locators.scrollAnAdminUserIntoView).scrollIntoView();
        cy.xpath(registerNewUserSelectors.locators.anAdminDeleteButton).click();
        cy.xpath(registerNewUserSelectors.locators.scrollAnAdminUserIntoView).should('not.exist');
    });


});