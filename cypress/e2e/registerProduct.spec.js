import "cypress-xpath";
import "allure-cypress";
import selectors from "../fixtures/pageObjects/loginPage";
import mainPageSelectors from "../fixtures/pageObjects/mainPage";
import registerProduct from "../fixtures/pageObjects/registerProductPage";
import listProductsPage from "../fixtures/pageObjects/listProductsPage";

describe('Register product tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('frontBaseUrl') + '/login');
        cy.get(selectors.locators.email).type(selectors.data.email);
        cy.get(selectors.locators.password).type(selectors.data.password);
        cy.get(selectors.locators.loginButton).click();
    });

    it('Registering a product', () => {
        cy.get(mainPageSelectors.locators.registerProductLink).click();
        cy.get(registerProduct.locators.productNameField).type(registerProduct.data.productName);
        cy.get(registerProduct.locators.productPriceField).type(registerProduct.data.productPrice);
        cy.get(registerProduct.locators.productDescriptionField).type(registerProduct.data.productDescription);
        cy.get(registerProduct.locators.productQuantityField).type(registerProduct.data.productQuantity);
        cy.get(registerProduct.locators.chooseImageField).selectFile(registerProduct.data.productImage);
        cy.get(registerProduct.locators.registerProductButton).click();
        cy.get(listProductsPage.locators.productFinder, {timeout: 1000000}).filter(':contains("Audi")').should('exist');
    });

    it('Deleting a product', () => {
        cy.get(mainPageSelectors.locators.listProductsLink).click();
        cy.xpath(listProductsPage.locators.scrollProductIntoView).scrollIntoView();
        cy.xpath(listProductsPage.locators.deleteProductButton).click();
        cy.xpath(listProductsPage.locators.scrollProductIntoView).should('not.exist');
    });

});