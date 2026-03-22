/*
2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
a. Sản phẩm 1: 2 sản phẩm
b. Sản phẩm 2: 3 sản phẩm
c. Sản phẩm 3: 1 sản phẩm
*/

import { test, expect } from '@playwright/test';

test("test 2", async ({ page }) => {
    await test.step("Navigate to https://material.playwrightvn.com/ and click “Bài học 2: Product page”", async () => {
        //Truy cập trang https://material.playwrightvn.com/
        await page.goto("https://material.playwrightvn.com/");

        //click vào “Bài học 2: Product page”
        await page.locator('//div[@class="section"][1]/table/tbody/tr[2]/td[2]/a').click();
    });

    const btnAddToCartProduct1 = page.locator('//button[@class="add-to-cart" and @data-product-id=1]');
    const btnAddToCartProduct2 = page.locator('//button[@class="add-to-cart" and @data-product-id=2]');
    const btnAddToCartProduct3 = page.locator('//button[@class="add-to-cart" and @data-product-id=3]');
    
    await test.step("Add 2 Product 1 To Cart", async () => {
        await btnAddToCartProduct1.click();

        await btnAddToCartProduct1.click();
    });

    await test.step("Add 3 Product 2 To Cart", async () => {
        await btnAddToCartProduct2.click();

        await btnAddToCartProduct2.click();

        await btnAddToCartProduct2.click();
    });

    await test.step("Add 1 Product 3 To Cart", async () => {
        await btnAddToCartProduct3.click();
    });
})