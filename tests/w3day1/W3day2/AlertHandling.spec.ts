import {test,expect} from "@playwright/test"

test(`Alerts Handling `,async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml");
    
    page.on(`dialog`,(dialog)=>{
        const textAlert=dialog.message();
        expect(textAlert).toEqual('Type your name and click OK');
        console.log(`Alert popup message is >>  ${textAlert}`);        
        dialog.accept("test");        

    })
    //await page.getByText("Show").nth(4).click();
    await page.getByText("Show",{exact:true}).nth(4).click()
    page.waitForTimeout(3000)

})