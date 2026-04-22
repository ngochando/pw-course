import { test } from "@playwright/test";

test("Test id selector", async ({ page }) => {
    await test.step("Step 1: Goto user registration website", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    });

    await test.step("Step 2: Fill username using css selector", async () => {
        await page.locator("#username").fill("demo-lesson-10")
    });
});