import{chromium, test} from "@playwright/test"

test(`Test Two broser context`,async()=>{
   const mybrowser =await chromium.launch({headless:false})
   const brContext=await mybrowser.newContext();
   const page1 = await brContext.newPage();

   await page1.goto("https://www.selenium.dev/");

   console.log(`Broser page 1 URL >>  ${ page1.url()} `)
   console.log(` Broser page 1 title ${page1.title()}`)
 const brContext1= await mybrowser.newContext();
 const page2 =await brContext1.newPage();

 await page2.goto("https://www.saucedemo.com/v1/")
 console.log(` Broser page 2 URL >>  ${page2.url()} `)
 const page2title=page2.title();
 console.log(`Broser page 2 title  ${page2title}`)
})