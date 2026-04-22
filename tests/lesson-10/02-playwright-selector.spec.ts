import { test, expect } from "@playwright/test";

test("Test playwright selector", async ({ page }) => {
    await test.step("Step 1: Goto user registration website", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    });

    await test.step("Step 2: Get heading value", async () => {
        const textContent = await page.getByRole("heading").textContent();
        console.log(textContent);
    });
});

test("Test playwright selector - get by link", async ({ page }) => {
    await test.step("Step 1: Goto user registration website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Choose todo page", async () => {
        await page.getByRole("link", {
            name: /Todo page/,
            // text:
        }).click();

        await expect(page.getByRole("heading")).toHaveText("To-Do List");
    });
});

test("Test playwright selector - multiple match", async ({ page }) => {
    await test.step("Step 1: Goto user registration website", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    });

    await test.step("Step 2: Fill input", async () => {
        await page.getByRole("textbox").nth(0).fill("hello");
    });
});
