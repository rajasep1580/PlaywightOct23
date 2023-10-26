import { test } from "@playwright/test";
test .describe(`Test login sale force Store storage state`,async()=>{
    test (` Store storage state`,async({page})=>{
    const userid:string="#username";
    const userpassword:string="input[class*='password']";
    const loginbutton:string="#Login";
    
    await page.goto("https://login.salesforce.com/?locale=in");
    page.waitForTimeout(6000)
    await page.locator(userid).fill("rajasurichetty@testleaf.com");
    await page.locator(userpassword).fill("Msrkya@1580");
    await page.locator(loginbutton).click();
   await page.waitForTimeout(6000);
 await page.context().storageState({path:"cred/sr-log.json"});

    })

})