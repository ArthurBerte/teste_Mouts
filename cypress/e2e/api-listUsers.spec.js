context("List a given user tests", () => {

    it('List a user by its name', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios?nome=Arthur%20Henrique',
            headers: {
                "accept": "application/json",
            },
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property("usuarios").to.be.an("array");
            expect(response.body.usuarios[0].nome).to.contain("Arthur Henrique");
        });
    });
});