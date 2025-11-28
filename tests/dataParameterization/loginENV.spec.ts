import {expect, test} from"@playwright/test";
import dotenv from "dotenv";

let filename= process.env.envFile || 'qa'
dotenv.config({path:`Data/${filename}.env`})
test(`Leaftap login via CSV`,async({page})=>{
    await page.goto(process.env.Base_url as string);
    await page.fill("#username",process.env.LPusername as string),
    await page.getByRole("textbox",{name:"Password"}).fill(process.env.LPpassword as string);
    await page.waitForTimeout(5000);
    await page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);
})