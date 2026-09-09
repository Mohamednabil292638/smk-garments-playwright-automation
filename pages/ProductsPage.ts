import { Page, Locator } from '@playwright/test';
import { NavigationComponent } from './NavigationComponent.js';

export class ProductsPage {
  readonly page: Page;
  readonly nav: NavigationComponent;
  readonly pageTitle: Locator;
  readonly mensProductGrid: Locator;
  readonly ladiesProductGrid: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavigationComponent(page);
    this.pageTitle = page.locator('.page-banner-title');
    this.mensProductGrid = page.locator('#mens-product-grid');
    this.ladiesProductGrid = page.locator('#ladies-product-grid');
    this.productCards = page.locator('.product-card');
  }

  async gotoMensWear() {
    await this.page.goto('/mens-wear.html');
  }

  async gotoLadiesWear() {
    await this.page.goto('/ladies-wear.html');
  }

  async getProductCardCount(): Promise<number> {
    return await this.productCards.count();
  }

  getProductCardByName(productName: string): Locator {
    return this.page.locator('.product-card', { hasText: productName });
  }

  async clickAddToCartForProduct(productName: string) {
    const card = this.getProductCardByName(productName);
    await card.locator('.product-order-btn').click();
  }

  async clickProductLink(productName: string) {
    const card = this.getProductCardByName(productName);
    await card.locator('.product-card-link').click();
  }
}
