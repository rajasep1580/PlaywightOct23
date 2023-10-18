import { test } from "@playwright/test";
import { time } from "console";
import { timeout } from "../../playwright.config";

test (`test login sale force`,async({page})=>{
const userid:string="#username";
const userpassword:string="input[class*='password']";
const loginbutton:string="#Login";

await page.goto("https://login.salesforce.com/?locale=in");
page.waitForTimeout(6000)
await page.locator(userid).fill("rajasurichetty@testleaf.com");
await page.locator(userpassword).fill("Msrkya@1580");
await page.locator(loginbutton).click();
page.waitForTimeout(60000);
await page.locator(".slds-icon-waffle").click();
page.waitForTimeout(90000);
await page.locator("input[class='slds-input']").fill("Sales");
page.waitForTimeout(7000);
})