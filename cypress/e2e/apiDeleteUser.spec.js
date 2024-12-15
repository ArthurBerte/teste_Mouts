context("Create, list and delete a new user test", () => {
    let userId = '';

    it('Create a new user to be listed and deleted later', () => {
        cy.fixture('../fixtures/requestJsons/registerNewUserRequest.json')
            .then(newUserFixture => {
                cy.request({
                    method: 'POST',
                    url: 'https://serverest.dev/usuarios',
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: newUserFixture
                })
            });
    });

    it('List a user by name user', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios?nome=Audi%20S3%208L',
            headers: {
                "accept": "application/json",
            },
        }).then((response) => {
            userId = response.body.usuarios[0]._id;
            expect(response).property('status').to.equal(200);
            expect(response.body).property("usuarios").to.be.an("array");
            expect(response.body.usuarios[0].nome).to.contain("Audi S3 8L");
        });
    });

    it('Delete listed user by ID', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/' + userId,
            headers: {
                "accept": "application/json",
            },
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body.message).to.contain("Registro excluído com sucesso");
        });
    });
});