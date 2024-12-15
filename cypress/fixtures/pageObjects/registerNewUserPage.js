export default {
    locators: {
        newUserNameField: '[data-testid="nome"]',
        newUserEmailField : '[data-testid="email"]',
        newUserPasswordField: '[data-testid="password"]',
        newUserRegisterSuccessMessage: '[class="alert alert-dismissible alert-primary"]',
        scrollNotAnAdminUserIntoView: '//div/div/p/table/tbody/tr/td[contains(text(), "Not an Admin")]',
        notAnAdminDeleteButton: '//div/div/p/table/tbody/tr/td[contains(text(), "Not an Admin")]/../td/div/button[@class="btn btn-danger"]',
        scrollAnAdminUserIntoView: '//div/div/p/table/tbody/tr/td[contains(text(), "An Admin")]',
        anAdminDeleteButton: '//div/div/p/table/tbody/tr/td[contains(text(), "An Admin")]/../td/div/button[@class="btn btn-danger"]',
    },

    data: {
        nonAdminName: 'Not an Admin User',
        nonAdminEmail: 'notanadmin@qa.com',
        nonAdminPassword: 'SuperSafePassword01!',
        adminName: 'An Admin User',
        adminEmail: 'anadmin@qa.com',
        adminPassword: 'SuperSafePassword01!',

    }
};