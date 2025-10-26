const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/login');

test('User can successfully log in', async ({ page }) => 
  {
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.gotoLoginPage();

    // Step 2: Log in with valid credentials
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Step 3: Optionally, verify login success
    // For example, check for a logout button or success message
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
