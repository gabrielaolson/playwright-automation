import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartCount: Locator;
  readonly cartIcon: Locator;
  readonly headerPage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('//*[@id="a-autoid-1-announce"]')
    this.cartCount = page.locator('css=#nav-cart-count');
    this.cartIcon = page.locator('#nav-cart-count-container > span.nav-cart-icon.nav-sprite');
    this.headerPage = page.locator('css=#sc-active-cart > div > div > div > h2');

  }

  async addProductToCart() {

    await expect(async ()=>{
        await this.addToCartButton.first().click();
        await expect(this.cartCount).toHaveText('1');
    }).toPass()

  }

  async validateProductCart(){
    await this.cartIcon.waitFor({state: 'visible'});
    await this.cartIcon.click();
    await this.page.reload()
    const verify = (await this.page.locator('//h2[contains(text(), "Shopping Cart")]').allInnerTexts()).toString();
    if (verify === "Shopping Cart")
        console.log("true");
  }
}


