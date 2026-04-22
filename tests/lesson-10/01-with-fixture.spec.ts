import { test } from '@playwright/test';

test("Test simple with fixture", async ({ page }) => {
    await page.goto("https://example.com");
});

test("Test open multiple tab", async ({ context }) => {
    const tab1 = await context.newPage();
    const tab2 = await context.newPage();
    const tab3 = await context.newPage();

    await tab1.goto("https://google.com");
    await tab2.goto("https://youtube.com");
    await tab3.goto("https://hoctest.com");
});

test("Test open multiple browser", async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto("https://google.com");
    await page2.goto("https://youtube.com");

    await page1.waitForTimeout(30_000);
});