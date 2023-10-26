import{test,expect} from "@playwright/test"

test.describe(`Edit Incident`,async()=>{

    const homepageURL="https://dev128670.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De09b0d3997063110580d37971153afa9"
                      // https://dev128670.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3De09b0d3997063110580d37971153afa9
    test.use({storageState:"credserivenow/servicenow_login_creds.json"})

    //test.describe.configure({mode:"serial"})

    let incidentID:string
    test(`create Incident for Edit incident`,async({page})=>{

        page.goto(homepageURL)

        await page.getByRole("button",{name:"All"}).click({timeout:40000});
        await page.getByPlaceholder("Filter").fill("incident");
        const submenuLoc=page.locator(".snf-collapsible-list").filter({has:page.getByLabel("Service Desk")});
        const incidentitem=submenuLoc.getByLabel("Incidents",{exact:true});
        await expect(incidentitem).toBeVisible();
        await incidentitem.click();
        await expect(page.locator(".center-header-zone")).toContainText("Incidents",{timeout:10000})
        await page.frameLocator("#gsft_main").locator("#sysverb_new").click();
        await expect(page.frameLocator("#gsft_main").getByLabel("Description",{exact:true})).toBeVisible();
        await expect(page.frameLocator("#gsft_main").getByLabel("Number",{exact:true})).toHaveValue(/INC/);
        incidentID = await page.frameLocator("#gsft_main").getByLabel("Number",{exact:true}).getAttribute("value") as string
        await page.waitForTimeout(10000);
        const callerPromise=page.context().waitForEvent("page",{timeout:10000})
        await page.frameLocator("#gsft_main").getByLabel("Look up value for field: Caller").click();
        await page.waitForTimeout(10000)
    });

})