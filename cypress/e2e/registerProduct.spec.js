import "cypress-xpath";

describe('Register product tests', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
        cy.get('#email').type('fulano@qa.com');
        cy.get('#password').type('teste');
        cy.get('[class="btn btn-primary"]').click();
    });

    it('Registering a product', () => {
        cy.get('[data-testid="cadastrar-produtos"]').click();
        cy.get('[data-testid="nome"]').type('Audi S3 model 8L Nardo Blue');
        cy.get('[data-testid="preco"]').type("120000");
        cy.get('[data-testid="descricao"]').type("New model for the PQ34 platform, the S3 8L in the color Nardo Blue.");
        cy.get('[data-testid="quantity"]').type("1");
        cy.get('input[type=file]').selectFile('cypress\\fixtures\\images\\audiS38LNardoBlue.jpeg');
        cy.get('[data-testid="cadastarProdutos"]').click();
        cy.get('[class="table table-striped"]', {timeout: 1000000}).filter(':contains("Audi")').should('exist');
    });

    it('Deleting a product', () => {
        cy.get('[data-testid="listar-produtos"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Audi S3")]').scrollIntoView();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Audi S3")]/../td[6]/div/button[@class="btn btn-danger"]').click();
        cy.xpath('//div/div/p/table/tbody/tr/td[contains(text(), "Audi S3")]').should('not.exist');
    });

});