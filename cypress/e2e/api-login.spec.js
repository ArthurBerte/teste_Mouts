context("POST login tests", () => {

    it('Log in with valid login credentials', () => {
        cy.fixture('../fixtures/requestJsons/login.json').then( loginFixture => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                headers: {
                    "accept" : "application/json",
                    "Content-Type" : "application/json"
                },
                body: loginFixture
            }).should((response) => {
                expect(response.status).to.eql(200);
                expect(response.body).to.contain.keys("message");
                expect(response.body.message).to.contain("Login realizado com sucesso");
            });
        });
    });
});