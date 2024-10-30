import { expect, type Locator, type Page } from '@playwright/test';

export class AmazonNavMain {
  readonly page: Page;
  readonly allBurgerButton: Locator;
  readonly leftMenu: Locator;
  readonly eletronicsCategory: Locator;
  readonly headPhones: Locator;
  readonly searchDropWearable: Locator;
  readonly resultsPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allBurgerButton = page.getByRole('button', { name: 'Open All Categories Menu' }).nth(0);
    this.leftMenu = page.locator('#hmenu-customer-name');
    this.eletronicsCategory = page.locator('xpath=//*[@id="hmenu-content"]//div[text()="Electronics"]');
    this.headPhones = page.getByRole('link', { name: "Headphones" }).nth(0);
    this.searchDropWearable = page.locator('xpath=//select[@id="searchDropdownBox"]/option[@selected="selected"]');
    this.resultsPage = page.locator('//*[contains(text(), "Check each product")]');
  }


  async openLeftMenu() {

    await expect(async () =>{
      await this.allBurgerButton.waitFor({ state: 'visible' });
      await this.allBurgerButton.click();
      await expect(this.leftMenu.nth(0)).toBeVisible({timeout:20000});
  
    }).toPass()



  }

  async openEletronicsCat() {
    await expect(this.eletronicsCategory.nth(0)).toBeVisible();
    await this.eletronicsCategory.nth(0).click();

  }

  async openResultsHeadphones() {

    await expect(async () => {
      await this.headPhones.waitFor({ state: 'attached', timeout: 100000 });
      await this.headPhones.hover({ timeout: 100000 });
      await this.headPhones.click();
      
      await expect(this.resultsPage).toBeVisible({
        timeout: 30000,
      })

    }).toPass()


  }


}
