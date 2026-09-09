import { Page, Locator } from '@playwright/test';

export class CartDrawer {
  readonly page: Page;
  readonly drawer: Locator;
  readonly overlay: Locator;
  readonly closeBtn: Locator;
  readonly emptyCartMessage: Locator;
  readonly cartItemsContainer: Locator;
  readonly cartItems: Locator;
  readonly cartTotalAmount: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.drawer = page.locator('#cartDrawer');
    this.overlay = page.locator('#cartOverlay');
    this.closeBtn = page.locator('.cart-close-btn');
    this.emptyCartMessage = page.locator('#cartEmpty');
    this.cartItemsContainer = page.locator('#cartItems');
    this.cartItems = page.locator('.cart-item');
    this.cartTotalAmount = page.locator('#cartTotal');
    this.checkoutBtn = page.locator('.cart-checkout-btn');
  }

  async closeDrawer() {
    await this.closeBtn.click();
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  getCartItemByName(name: string): Locator {
    return this.page.locator('.cart-item', { hasText: name });
  }

  async incrementItemQty(name: string) {
    const item = this.getCartItemByName(name);
    await item.locator('.qty-btn', { hasText: '+' }).click();
  }

  async decrementItemQty(name: string) {
    const item = this.getCartItemByName(name);
    await item.locator('.qty-btn', { hasText: '−' }).click();
  }

  async removeItem(name: string) {
    const item = this.getCartItemByName(name);
    await item.locator('.cart-remove-btn').click();
  }

  async getCartTotalText(): Promise<string> {
    return (await this.cartTotalAmount.textContent()) || '₹0';
  }

  async clickProceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
