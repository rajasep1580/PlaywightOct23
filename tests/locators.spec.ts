
//input#user-name  id css selector '
// input.form_input Class css selector
// input[placeholder='Username']
//input#user-name+input

import { test } from "@playwright/test";

test(`login to demo site` ,async({page})=>{
    //const browserInstance=await chromium.launch();
    //const brContext=await browserInstance. newContext()
    //const page=await brContext.newPage()
    const usernameSelector:string='input#user-name';
    const userpPSWSelector:string='input#password';
    const butSelector:string='input#login-button';

    await page.goto("https://www.saucedemo.com/v1/index.html");

    //await page.locator(usernameSelector).filter();
    await page.locator(usernameSelector).fill("standard_user");
    await page.locator(userpPSWSelector).fill("secret_sauce");
    await page.locator(butSelector).click();


    
})