/*
3. Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 3: Todo page”.
a. Thêm mới 100 todo item có nội dung “Todo <i>”
b. Xoá các todo có số lẻ
*/

import { test, expect } from '@playwright/test';

test("test 3", async ({ page }) => {
    await test.step("Navigate to https://material.playwrightvn.com/ and click “Bài học 3: Todo page”", async () => {
        //Truy cập trang https://material.playwrightvn.com/
        await page.goto("https://material.playwrightvn.com/");

        //click vào “Bài học 3: Todo page”
        await page.locator('//div[@class="section"][1]/table/tbody/tr[3]/td[2]/a').click();
    });

    const txtBoxInputTask = page.locator('//input[@id="new-task"]');
    const btnAddTask = page.locator('//button[@id="add-task"]');

    await test.step("Thêm mới 100 todo item có nội dung Todo <i>", async () => {
        for (let i = 1; i <= 100; i++) {
            await txtBoxInputTask.fill(`Todo ${i}`)
            await btnAddTask.click();
        }
    });

    await test.step("Xoá các todo có số lẻ", async () => {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                page.once('dialog', async dialog => { await dialog.accept(); })

                await page.locator(`//li/div/button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
})