
import{expect, test} from "@playwright/test"

test(`Test verify the loing message`,async({page})=>{
    const usernameSelector:string='input#user-name';
    const userpPSWSelector:string='input#password';
    const butSelector:string='input#login-button';
    const errorloc:string='h3[data-test=error]'
    await page.goto("https://www.saucedemo.com/v1/index.html");

    await page.locator(usernameSelector).fill("standard_user");
    //await page.locator(userpPSWSelector).fill("secret_sauce");
    await page.locator(butSelector).click();

   const ele= await page.locator(errorloc);
   await expect(ele,`Visible lement ${ele}`).toBeVisible();


})