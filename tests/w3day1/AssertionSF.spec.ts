import{test,expect} from "@playwright/test"

test("Assertion Sales Force login URL",async({page})=>{
    const userid:string="#username";
    const userpassword:string="input[class*='password']";
    const loginbutton:string="#Login";
    page.goto("https://login.salesforce.com/")

   await page.locator(userid).fill("rajasurichetty@testleaf.com");
   await page.locator(userpassword).fill("Msrkya@1580")
   await page.locator(loginbutton).click();
   await page.waitForTimeout(7000)   
   console.log('url >>>'+page.url())
   expect(page.url()).toMatch("https://testleafcom-f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    
})