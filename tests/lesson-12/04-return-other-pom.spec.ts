import { expect, test } from '@playwright/test';
import { LoginPage } from './page/login.page';

test.describe("Dashboard 01 - login to dashboard ", async () => {
    test("@AUTH_001 - Login fail", async ({ page }) => {
        let loginPage = new LoginPage(page);

        const testData = {
            username: "betterbytes.academy.admin",
            password: "StrongPass@BetterBytesAcademy"
        };

        await test.step("Nhập vào thông tin username, password bị sai, verify message lỗi hiển thị", async () => {
            // Act
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await loginPage.fillUsername(testData.username);
            await loginPage.fillPassword(testData.password);
            await loginPage.checkRememberMe();
            const dashboardPage = await loginPage.clickLogin();

            // Assertion
            await expect(page.locator(dashboardPage.xpathDashboard)).toBeVisible();
        });
    });
})