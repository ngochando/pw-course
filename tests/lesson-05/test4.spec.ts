/*
4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
a. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
    i. Field “Title”: điền nội dung ở cột “Tên action”
    ii. Field “Content”: điền nội dung ở cột “Mô tả”
b. Thực hiện search với keyword “một hoặc nhiều”
*/

import { test, expect } from '@playwright/test';

test("test 4", async ({ page }) => {
    await test.step("Navigate to https://material.playwrightvn.com/ and click “Bài học 4: Personal notes”", async () => {
        //Truy cập trang https://material.playwrightvn.com/
        await page.goto("https://material.playwrightvn.com/");

        //click vào “Bài học 4: Personal notes”
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    });

    const txtBoxSearch = page.locator('//input[@id="search"]');
    const txtBoxTitle = page.locator('//input[@id="note-title"]');
    const txtBoxContent = page.locator('//textarea[@id="note-content"]');
    const btnAddNote = page.locator('//button[@id="add-note"]');

    await test.step("Thêm mới 10 notes", async () => {
        await test.step("Add note 1", async () => {
            await txtBoxTitle.fill("click");
            await txtBoxContent.fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
            await btnAddNote.click();
        });

        await test.step("Add note 2", async () => {
            await txtBoxTitle.fill("fill");
            await txtBoxContent.fill("Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web");
            await btnAddNote.click();
        });

        await test.step("Add note 3", async () => {
            await txtBoxTitle.fill("type");
            await txtBoxContent.fill("Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
            await btnAddNote.click();
        });

        await test.step("Add note 4", async () => {
            await txtBoxTitle.fill("hover");
            await txtBoxContent.fill("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
            await btnAddNote.click();
        });

        await test.step("Add note 5", async () => {
            await txtBoxTitle.fill("check");
            await txtBoxContent.fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
            await btnAddNote.click();
        });

        await test.step("Add note 6", async () => {
            await txtBoxTitle.fill("uncheck");
            await txtBoxContent.fill("Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
            await btnAddNote.click();
        });

        await test.step("Add note 7", async () => {
            await txtBoxTitle.fill("selectOption");
            await txtBoxContent.fill("Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
            await btnAddNote.click();
        });

        await test.step("Add note 8", async () => {
            await txtBoxTitle.fill("press");
            await txtBoxContent.fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
            await btnAddNote.click();
        });

        await test.step("Add note 9", async () => {
            await txtBoxTitle.fill("dblclick");
            await txtBoxContent.fill("Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
            await btnAddNote.click();
        });

        await test.step("Add note 10", async () => {
            await txtBoxTitle.fill("dragAndDrop");
            await txtBoxContent.fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
            await btnAddNote.click();
        });
    });

    await test.step("Thực hiện search với keyword “một hoặc nhiều”", async () => {
        await txtBoxSearch.fill("một hoặc nhiều");
        await txtBoxSearch.press('Enter');
    })
})