import { test } from "@playwright/test";
import { loginPage } from "./lp";
test("login page",async({page})=>{

let login= new loginPage(page);
await login.loadURL("http://leaftaps.com/opentaps/control/main");

await login.enterCred("DemoSalesManager","crmsfa");
await login.clickLogin();

})