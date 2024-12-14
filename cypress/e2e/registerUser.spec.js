import "cypress-xpath";

describe('User registry tests', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });

    it('Register a new non-admin user', () => {
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type('Not an Admin User');
        cy.get('[data-testid="email"]').type('notanadmin@qa.com');
        cy.get('[data-testid="password"]').type('SuperSafePassword01!');
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[class="alert alert-dismissible alert-primary"]').should('have.text', '×Cadastro realizado com sucesso');
    });

    it('Register a new admin user', () => {
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type('An Admin User');
        cy.get('[data-testid="email"]').type('anadmin@qa.com');
        cy.get('[data-testid="password"]').type('SuperSafePassword01!');
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[class="alert alert-dismissible alert-primary"]').should('have.text', '×Cadastro realizado com sucesso');
    });

    it('Deleting a non admin user', () => {
        cy.get('#email').type('fulano@qa.com');
        cy.get('#password').type('teste');
        cy.get('[class="btn btn-primary"]').click();
        cy.get('[data-testid="listar-usuarios"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Not an Admin")]').scrollIntoView();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Not an Admin")]/../td/div/button[@class="btn btn-danger"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Not and Admin")]').should('not.exist');
    });

    it('Deleting an admin user', () => {
        cy.get('#email').type('fulano@qa.com');
        cy.get('#password').type('teste');
        cy.get('[class="btn btn-primary"]').click();
        cy.get('[data-testid="listar-usuarios"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "An Admin")]').scrollIntoView();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "An Admin")]/../td/div/button[@class="btn btn-danger"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "An Admin")]').should('not.exist');
    });


});