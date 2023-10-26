import{test,expect} from "@playwright/test"
import path from "path";
test.describe(`File Upload tests`,async()=>{

test(`upload the file INPUT DOM`,async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml ")

const cardchoose=page.locator(".card").filter({has:page.getByText('Basic Upload')});

const waitfrupload=page.waitForEvent("filechooser");
await cardchoose.getByText("Choose").click()
const waitchoose=await waitfrupload;
await cardchoose.locator("input[type='file']").setInputFiles([path.join(__dirname,'Screenshot.png')]);
await expect(cardchoose.locator(".ui-fileupload-filename")).toContainText("Screenshot.png")
})
})