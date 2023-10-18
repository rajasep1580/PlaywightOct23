import {test,expect} from "@playwright/test"
import { Console } from "console";

test(`Minimize and Maximize`,async({page})=>{

    page.goto("https://www.leafground.com/alert.xhtml")

    page.on(`dialog`,(dialog)=>{
        const textonAlert=dialog.message();
        console.log(`Alert popup test ${textonAlert}`);
        expect(textonAlert).toContain("maximized or minimized.")        
        dialog.accept();

    })
    await page.getByText("Show",{exact:true}).nth(5).click()
})