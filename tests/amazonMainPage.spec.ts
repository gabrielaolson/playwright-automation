import { test, expect } from '@playwright/test';
import { AmazonNavMain } from '../pages/AmazonNavMain';
import { CartPage } from '../pages/CartPage';
import { AmazonMainPage } from '../pages/AmazonMainPage';

test.describe('todo tests', () => {
    let amazonNavMain;
    let HomePage;
    let cartPage;


    test.beforeEach(async ({ page }) => {
        amazonNavMain = new AmazonNavMain(page);
        HomePage = new AmazonMainPage(page);
        cartPage = new CartPage(page);
    });



    test('Check category descriptions', async ({ page }) => {
        // const amazonMainPage = new AmazonMainPage(page);
        await HomePage.navigateTo();

    });
  
});