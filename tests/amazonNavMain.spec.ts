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

test('Go into Headphonesfrom Nav on main page and add a product to cart', async ({ page }) => {
  await test.step('Navigate to the main screen of the amazon', async() =>{
    await HomePage.navigateTo();
  })

  await test.step('Main screen of Amazon is displayed', async () => {
    await HomePage.validateHomePage()
  })

  await test.step('Click on All burguer button on top left', async() =>{
    await amazonNavMain.openLeftMenu();
  })

  await test.step('Click on Eletronics Category', async() =>{
    await amazonNavMain.openEletronicsCat();
  })

  await test.step('Click on Headphones', async() =>{
    await amazonNavMain.openResultsHeadphones();
  })

  await test.step('Add a first product found to the cart', async() => {
    await cartPage.addProductToCart();
  })

  await test.step('Validate if there is a product on the cart', async() => {
    await cartPage.validateProductCart();

  })






});




});