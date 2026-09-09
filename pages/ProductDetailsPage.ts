import { Page, Locator } from '@playwright/test';
import { NavigationComponent } from './NavigationComponent.js';

export class ProductDetailsPage {
  readonly page: Page;
  readonly nav: NavigationComponent;
  readonly categoryBreadcrumb: Locator;
  readonly nameBreadcrumb: Locator;
  readonly pdpTitle: Locator;
  readonly pdpType: Locator;
  readonly pdpPrice: Locator;
  readonly pdpComboPrice: Locator;
  readonly pdpSavings: Locator;
  readonly sizeButtons: Locator;
  readonly colorButtons: Locator;
  readonly sizeValidationMsg: Locator;
  readonly colorValidationMsg: Locator;
  readonly qtyDecreaseBtn: Locator;
  readonly qtyIncreaseBtn: Locator;
  readonly qtyValue: Locator;
  readonly qtyTotalText: Locator;
  readonly addToCartBtn: Locator;
  readonly mainImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavigationComponent(page);
    this.categoryBreadcrumb = page.locator('#pdp-cat-link');
    this.nameBreadcrumb = page.locator('#pdp-breadcrumb-name');
    this.pdpTitle = page.locator('.pdp-title');
    this.pdpType = page.locator('.pdp-type');
    this.pdpPrice = page.locator('.pdp-price');
    this.pdpComboPrice = page.locator('.pdp-combo-price');
    this.pdpSavings = page.locator('.pdp-savings');
    this.sizeButtons = page.locator('.pdp-size-btn');
    this.colorButtons = page.locator('.pdp-color-btn');
    this.sizeValidationMsg = page.locator('#sizeValidation');
    this.colorValidationMsg = page.locator('#colorValidation');
    this.qtyDecreaseBtn = page.locator('.pdp-qty-btn', { hasText: '−' });
    this.qtyIncreaseBtn = page.locator('.pdp-qty-btn', { hasText: '+' });
    this.qtyValue = page.locator('#pdpQtyValue');
    this.qtyTotalText = page.locator('#pdpQtyTotal');
    this.addToCartBtn = page.locator('#pdpAddToCart');
    this.mainImage = page.locator('#pdpImg');
  }

  async gotoProduct(productId: string) {
    await this.page.goto(`/product-details.html?id=${productId}`);
  }

  async selectSize(size: string) {
    await this.page.locator(`.pdp-size-btn[data-size="${size}"]`).click();
  }

  async selectColor(colorName: string) {
    await this.page.locator(`.pdp-color-btn[data-color="${colorName}"]`).click();
  }

  async incrementQuantity() {
    await this.qtyIncreaseBtn.click();
  }

  async decrementQuantity() {
    await this.qtyDecreaseBtn.click();
  }

  async clickAddToCart() {
    await this.addToCartBtn.click();
  }

  async getQuantityValue(): Promise<string> {
    return (await this.qtyValue.textContent()) || '1';
  }
}
