const {test, expect} = require('@playwright/test');

//Syntax of tetcase
test ('First PlayWright',async ({browser})=>
 {
//Playwright Test Code
// new incognito window, we will provide which browser to open in config
const context = await browser.newContext();
const page = await context.newPage();
// above two lines we can comment since browser,page will be provide them by default,
//so that we can directly access from goto
// provide which page we want to open 
const userName = page.locator("#username");
const password = page.locator("[type='password']");
const signIn = page.locator("#signInBtn");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// get title of page and print
console.log ( await page.title());
await userName.fill("Mounika");
await password.fill("Mounika");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect");
await userName.fill("");
await userName.fill("rahulshettyacademy");
await password.fill("");
await password.fill("learning");
await signIn.click();
console.log(await page.title());
  console.log (await page.locator(".card-body a").first().textContent());
console.log (await page.locator(".card-body a").nth(1).textContent());
console.log (await page.locator(".card-body a").last().textContent());

 }); 



/*test.only ('Seconds test', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // get title and compare the result
    console.log(await page.title());
   await page.locator(".login-wrapper-footer-text a").click();
 // expect url to be equal to given url
 
  // await expect(page.locator(".login-wrapper-footer-text a")).toHaveURL("https://rahulshettyacademy.com/client/#/auth/register")
 await page.locator("#firstName").fill("Mounika");
 await page.locator("#lastName").fill("Dasari");
 await page.locator("#userEmail").fill("dasari.mounika542@gmail.com");
await page.locator("#userMobile").fill("9676217105");
await page.locator("#userPassword").fill("Mounika@123");
await page.locator("#confirmPassword").fill("Mounika@123");
/*await page.locator(".custom-select ng-valid ng-dirty ng-touched").click();
await 
await page.locator(".mt-3 ng-untouched ng-pristine ng-valid").check("Female");
await page.locator(".ng-pristine ng-invalid ng-touched").click();
await page.locator('input.ng-untouched.ng-pristine.ng-invalid[type="checkbox"]').check();
await page.locator("#login").click();
await page.locator(".btn btn-primary").click();
await page.locator("userEmail").fill("dasari.mounika542@gmail.com");
await page.locator("userPassword").fill("Mounika@123");
await page.locator("#login").click();

});*/