import { chromium, Page } from "@playwright/test";

 export class loginPage{
screenshot(arg0: { path: string; fullPage: boolean; }) {
    throw new Error("Method not implemented.");
}

page:Page;
constructor(tpage:Page){
this.page=tpage;

}

async loadURL(turl:string){
    await this.page.goto(turl)
}
async enterCred(tuname:string, tpswd:string){
    await this.page.fill("#username",tuname),
    await this.page.getByRole("textbox",{name:"Password"}).fill(tpswd);
    await this.page.screenshot({
  path: 'screens/Cred.png'
});

}
async clickLogin(){
    await this.page.click(".decorativeSubmt");
    await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
    await this.page.waitForTimeout(5000);
    await this.page.close();
}

}
// async function doLogin() {
    

// const browser= await chromium.launch({headless:false});
// const context = await browser.newContext();
// const page = await context.newPage();

// let login= new loginPage(page);
// await login.loadURL("http://leaftaps.com/opentaps/control/main");
// await login.enterCred("DemoSalesManager","crmsfa");
// await login.clickLogin();
// }
// doLogin();
