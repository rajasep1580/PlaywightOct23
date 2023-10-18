import { test, expect } from "@playwright/test";

test(`Actionability Checks`,async({page})=>{

    await page.goto("https://www.leafground.com/waits.xhtml");
    //await expect(page.getByText("I am here",{exact:true})).toBeHidden();
    //await page.locator("//span[text()='Click']").nth(0).click()
    const cardTile = page.locator(".card").filter({hasText:"Wait for Visibility"})
    const cardbutton = cardTile.locator("button").filter({hasText:"Click"})
    const buttonisHid = cardTile.locator("button").filter({hasText:"I am here"})
    await page.pause();
    await expect(buttonisHid).not.toBeVisible();
    await cardbutton.click();    
    await expect(buttonisHid).toBeVisible({timeout:7000})


})
