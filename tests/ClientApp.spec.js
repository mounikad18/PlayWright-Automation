const {test, expect} = require('@playwright/test');


//Syntax of tetcase

test ('First PlayWright Test',async ({page})=>
 {
//Playwright Test Code
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator("#userEmail").fill("dasari.mounika45@gmail.com");
await page.locator("#userPassword").fill("Welcome@123");
await page.locator("[value='login']").click();
console.log ( await page.title());
  console.log (await page.locator(".card-body b").first().allTextContents());
  await expect(page).toHaveTitle("Rahul Shetty Academy");
 
})
