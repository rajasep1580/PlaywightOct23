import{expect, test} from "@playwright/test"

test(`Test Salesforce login `,async({page})=>{
    const userid:string="#username";
    const userpassword:string="input[class*='password']";
    const loginbutton:string="#Login";
    
    await page.goto("https://login.salesforce.com/?locale=in");
    page.waitForTimeout(6000)
    await page.locator(userid).fill("rajasurichetty@testleaf.com");
    await page.locator(userpassword).fill("Msrkya@1580");
    await page.locator(loginbutton).click();
    //page.waitForTimeout(60000);
const pagehomeurl=page.url();
page.waitForNavigation();
 expect(pagehomeurl).toContain("https://testleafcom-f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
 expect(page.url).toEqual("https://testleafcom-f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
})