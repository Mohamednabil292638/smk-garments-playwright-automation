import { Page, Locator } from '@playwright/test';

export class PaymentPrepModal {
  readonly page: Page;
  readonly modal: Locator;
  readonly closeBtn: Locator;
  readonly totalText: Locator;
  readonly completeOrderBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('#paymentPrepModal');
    this.closeBtn = page.locator('#paymentPrepModal .close-modal');
    this.totalText = page.locator('#paymentPrepTotal');
    this.completeOrderBtn = page.locator('#paymentPrepModal .btn-primary', { hasText: 'Complete Order' });
  }

  async clickCompleteOrder() {
    await this.completeOrderBtn.click();
  }

  async close() {
    await this.closeBtn.click();
  }
}
