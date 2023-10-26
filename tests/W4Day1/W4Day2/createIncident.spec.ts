import{test,expect,PlaywrightTestConfig} from "@playwright/test"
import { TIMEOUT } from "dns";
test.describe('ServiceNow Incident',async()=>{
    //test.setTimeout(60000)
//UInstance URL: https://dev113480.service-now.com/
//Username: admin
//Password: e/mG1T$9ZOdc
//
//https://dev128670.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De09b0d3997063110580d37971153afa9
    let incidentID;
    const userName = "admin"
    const password = "-lhKYeQ3P0i-"
    const instanceUrl = "https://dev128670.service-now.com"
    test(`TC001 - Login to servicenow instance`,async({page})=>{
        await page.goto(instanceUrl)

        await page.waitForTimeout(7000)
        await page.locator("#user_name").fill(userName)
        await page.locator("#user_password").fill(password)      
        await page.locator("#sysverb_login").click()        
        //await page.waitForTimeout(10000)
               //page.pause()
        //const mainIframeLocator = page.frameLocator("iframe#gsft_main")
        //await expect(mainIframeLocator.getByText("App Engine Studio")).toBeVisible({timeout:25000})

        //save the storage state    
        await page.context().storageState({path:"credserivenow/servicenow_login_creds.json"})
        await page.getByRole("button",{name:"All"}).click({timeout:30000});   
       /* 
        await page.locator("#filter").fill("Incidents");
        const eleService= await page.locator(".snf-collapsible-list").filter({has:page.getByLabel("Service Desk")})
        const eleIncident= await eleService.getByLabel("Incidents",{exact:true})
        await expect(eleIncident).toBeVisible();
        await eleIncident.click();        

        //const incidentIframe =  page.frameLocator("#gsft_main");
        await expect(page.locator(".center-header-zone")).toContainText("Incidents",{timeout:10000})
        await  page.frameLocator("#gsft_main").locator("#sysverb_new").click()
        console.log("Click on New incident button")
        await expect(page.frameLocator("#gsft_main").getByLabel("Description",{exact:true})).toBeVisible({timeout:10000})
        await expect(page.frameLocator("#gsft_main").getByLabel("Number",{exact:true})).toHaveValue(/INC/)
        incidentID=  await page.frameLocator("#gsft_main").getByLabel("Number",{exact:true}).getAttribute("value") as string
        console.log(`incident id >> ${incidentID}`)
        await page.waitForTimeout(10000)
        const calledpagepromise=page.context().waitForEvent("page")
        await page.frameLocator("#gsft_main").getByLabel("Look up value for field: Caller").click()
        const calleridpage=await calledpagepromise

        await calleridpage.bringToFront()
        await calleridpage.getByText("Aileen Mottern",{exact:true}).click()
        await page.frameLocator("#gsft_main").getByLabel("Short description",{exact:true}).fill("Test PlayWright");
        await page.frameLocator("#gsft_main").locator("#sysverb_insert").click();

*/

    })
    


   /*test(`create incident`,async({page})=>{
        test.use({storageState:"creds/servicenow_login_creds.json"})

        await page.goto("https://dev128670.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De09b0d3997063110580d37971153afa9")
       await  page.locator(".sn-polaris-tab can-animate polaris-enabled").click();
        await page.locator("#filter").fill("Incidents");
       //await  expect(page.locator("button")).toHaveText("Incidents")
       await expect(page.title).toMatch("Incidents | ServiceNow")
        await page.locator("sysverb_new").click();
        incidentID= await page.locator("incident.number").inputValue();
        page.locator("icon icon-search").click();
        //page.locator("list_row list_odd").




    })*/
})
