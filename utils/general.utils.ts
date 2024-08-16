import { Page } from "@playwright/test";

require('dotenv').config();

export class GeneralUtils {
    username : string;
    password : string;
    page : Page;

    constructor(page : Page) {
        this.username = process.env.EMAIL!;
        this.password = process.env.PASSWORD!;
        this.page = page;
    }

    public static async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async login(page: Page) {
        console.log('Logging in...')

        await page.goto('https://www.airlinemanager.com/');

        await page.getByRole('button', { name: 'Play Free Now' }).click();
        await page.locator('#lEmail').click();
        await page.locator('#lEmail').fill(this.username);
        await page.locator('#lEmail').press('Tab');
        await page.locator('#lPass').click();
        await page.locator('#lPass').fill(this.password);
        await page.getByRole('button', { name: 'Log In', exact: true }).click();

        //await page.locator('#intro_popup span').s

        console.log('Logged in successfully!');
    }
}
