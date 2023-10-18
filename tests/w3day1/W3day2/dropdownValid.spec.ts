import{test ,expect} from "@playwright/test"
import { timeout } from "../../../playwright.config";
test.only(`Validate the Dropdown `,async({page})=>{

    const usernameSelector:string='input#user-name';
    const userpPSWSelector:string='input#password';
    const butSelector:string='input#login-button';
    const errorloc:string='h3[data-test=error]'
    await page.goto("https://www.saucedemo.com/v1/index.html");

    await page.locator(usernameSelector).fill("standard_user");
    await page.locator(userpPSWSelector).fill("secret_sauce");
    await page.locator(butSelector).click();  

    const selectLocator=  page.locator(".product_sort_container");
    await selectLocator.selectOption("lohi");
    const onsielocator= page.locator(".inventory_item_name").filter({hasText:"Sauce Labs Onesie"});
    await expect(onsielocator).toBeVisible({timeout:10000})


    const jocketlocator= page.locator(".inventory_item_name").filter({hasText:"Sauce Labs Fleece Jacket"});
await expect(jocketlocator).toBeVisible({timeout:10000})




})