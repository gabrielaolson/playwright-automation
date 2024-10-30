import { expect, type Locator, type Page } from '@playwright/test';
import { timeLog } from 'console';

export class AmazonMainPage {
    readonly page: Page;
    readonly headings: Locator;
    readonly url: String;


    constructor(page: Page) {
        this.page = page;
        this.headings = page.locator('.a-cardui-header');
        this.url = 'https://www.amazon.com'

    }
    async navigateTo() {
        await this.page.goto('https://www.amazon.com');
    }

    async validateHomePage(){
        const currentUrl = this.page.url();
        expect(currentUrl).toBe('https://www.amazon.com/')
    }

   

    }
    




