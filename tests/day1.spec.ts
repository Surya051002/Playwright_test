import {test,expect} from '@playwright/test'

test("first test",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole('textbox',{ name: 'Username' }).fill("standard_user")
    await page.getByRole('textbox',{ name: 'Password' }).fill("secret_sauce")
    await page.getByRole('button',{ name: 'login' }).click()
    await expect(page.getByText("Products")).toBeVisible()
    
})