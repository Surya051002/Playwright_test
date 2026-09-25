import {test,expect} from '@playwright/test'


test("portfolio testing",async ({page})=>{
    await page.goto("https://suryaprakashrbm-source.github.io/Portfolio/");
    await expect(page.getByRole('link',{name:"About"})).toBeVisible()
    await page.getByRole('link',{name:"About"}).click()
    await expect(page.getByRole('heading', { name:"My Journey From QA to AI"})).toBeVisible();
    await page.getByRole('link',{name:"Skills"}).click()
    await expect(page.getByRole('heading', { name:"Technical Arsenal"})).toBeVisible();
    await page.getByRole('link',{name:"Experience"}).click()
    await expect(page.getByRole('heading', { name:"Professional Experience"})).toBeVisible();
    await page.getByRole('link',{name:"Education"}).click()
    await expect(page.getByRole('heading', { name:"Education"})).toBeVisible();
    await page.getByRole('link',{name:"Projects",exact: true}).click()
    await expect(page.getByRole('heading', { name:"Featured Projects"})).toBeVisible();
    await page.getByRole('link',{name:"Contact"}).click()
    await expect(page.getByRole('heading', { name:"Let's Connect"})).toBeVisible();
})