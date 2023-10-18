import {test,expect} from "@playwright/test"
test(`Window HAndles`,async({page,context,browser})=>{
page.goto("https://www.leafground.com/window.xhtml");
const windowpromis=context.waitForEvent("page");
const ele=await page.getByRole('heading',{name:'Click and Confirm new Window Opens'})
const text=await ele.textContent();
console.log(` button Above label text >>> ${text}`)
page.getByText("Open",{exact:true}).click();

const window =await windowpromis;
await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml");

await window.bringToFront();

})