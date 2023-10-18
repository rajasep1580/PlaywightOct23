
import {chromium,test} from "@playwright/test";

test(`open url`,async()=>{
    const mybrowser=await chromium.launch({headless:false})
    //context1
    const context1 =await mybrowser.newContext();
    const page1=await context1.newPage();

    const context2 =await mybrowser.newContext();
    const page2=await context2.newPage();

    //launch the broser 
    await page1.goto("https://google.com/")
    const pageurl= page1.url()
    console.log(`page 1 url ${pageurl}  `);

    //lunach the 2 broser 
    await page2.goto("https://www.selenium.dev/")
    const pageurll=page2.url();
    console.log(`page 2 url ${pageurl}`)
})