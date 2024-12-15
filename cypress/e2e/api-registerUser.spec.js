context("Register new user tests", () => {

    it('Register a new non admin user', () => {
        cy.fixture('../fixtures/requestJsons/registerNewUserRequest.json').then( newUserFixture => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                headers: {
                    "accept" : "application/json",
                    "Content-Type" : "application/json"
                },
                body: newUserFixture
            }).then((response) => {
                return new Promise( resolve => {
                    expect(response).property('status').to.equal(201)
                    let userId = response.body
                    resolve(userId);
                    console.log(userId);
                })
            });
        });
    });
});