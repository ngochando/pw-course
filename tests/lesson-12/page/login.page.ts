import { Page, expect } from '@playwright/test';
import { DashboardPage } from './dashboard.page';

export class LoginPage {
    page: Page;
    usernameXpath: string;
    passwordXpath: string;
    cbRememberXpath: string;
    buttonLoginXpath: string;
    errorMsgXpath: string;

    constructor(page: Page) {
        this.page = page;
        this.usernameXpath = "//input[@id='user_login']";
        this.passwordXpath = "//input[@id='user_pass']";
        this.cbRememberXpath = "//input[@id='rememberme']";
        this.buttonLoginXpath = "//input[@id='wp-submit']";
        this.errorMsgXpath = "//div[@id='login_error']";
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameXpath).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordXpath).fill(password);
    }

    async checkRememberMe() {
        await this.page.locator(this.cbRememberXpath).check();
    }

    async clickLogin() {
        await this.page.locator(this.buttonLoginXpath).click();
        
        return new DashboardPage(this.page);
    }

    async verifyErrorMessageAppear(username: string) {
        const expectedErrorMsg = `Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`;

        await expect(this.page.locator(this.errorMsgXpath)).toContainText(expectedErrorMsg);
    }
}