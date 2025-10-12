const { Module } = require("module");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = LoginPage;
