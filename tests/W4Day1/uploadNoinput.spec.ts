import{test,expect} from "@playwright/test"
test(`Test Upload No Input`,async({page})=>{
page.goto("https://the-internet.herokuapp.com/upload")
const waiteven=page.waitForEvent('download');
const choosedown=await waiteven;
//choosedown.set
const pageelem=page.locator('#drag-drop-upload').click();


})