export default {
    locators: {
        email: '[data-testid="email"]',
        password: '[data-testid="senha"]',
        loginButton: '[data-testid="entrar"]',
        loginFailureWarning: '[class="alert alert-secondary alert-dismissible"]',
        newUserLinkAndButton: '[data-testid="cadastrar"]',
    },

    data: {
        email: 'arthurberte@qa.com',
        password: 'SuperSafePassword01!',
        wrongEmail: 'qa@qa.com',
        wrongPassword: 'teste',
    }
};