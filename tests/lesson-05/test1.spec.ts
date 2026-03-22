/*
1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page (có đủ các element)”
a. Nhập thông tin cho các field: Username, Email, Gender, Hobbies,
Interests, Country, Date of Birth, Profile Picture, Biography
b. Click button Register
*/

import { test, expect } from '@playwright/test';

test("test 1", async ({ page }) => {
    await test.step("Navigate to https://material.playwrightvn.com/ and click “Bài học 1: Register Page (có đủ các element)”", async () => {
        //Truy cập trang https://material.playwrightvn.com/
        await page.goto("https://material.playwrightvn.com/");

        //click vào “Bài học 1: Register Page (có đủ các element)”
        await page.locator('//div[@class="section"][1]/table/tbody/tr[1]/td[2]/a').click();
    });

    const userName = page.locator('//input[@id="username"]');
    const email = page.locator('//input[@id="email"]');
    const genderFemale = page.locator('//input[@type="radio" and @id="female"]');
    const hobbiesCooking = page.locator('//input[@type="checkbox" and @id="cooking"]')
    const interests = page.locator('//select[@id="interests"]');
    const country = page.locator('//select[@id="country"]');
    const dateOfBirth = page.locator('//input[@id="dob"]');
    const profilePicture = page.locator('//input[@type="file"]');
    const biography = page.locator('//textarea[@id="bio"]');
    const btnResiter = page.locator('//button[@type="submit"]');

    //a. Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
    await test.step("Input field", async () => {
        await userName.fill("Do Phung Ngoc Han");
        await email.fill("ngochan@email.com");
        await genderFemale.check();
        await hobbiesCooking.check();
        await interests.selectOption({ label: 'Art' });
        await country.selectOption({ label: 'United Kingdom'});
        await dateOfBirth.fill("1999-08-31");
        await profilePicture.setInputFiles('tests/lesson-05/image.png');
        await biography.pressSequentially("Here my bio!!!")
    })    
    
    //b. Click button Register
    await test.step("Click btn Register", async () => {
        await btnResiter.click();
    })
})