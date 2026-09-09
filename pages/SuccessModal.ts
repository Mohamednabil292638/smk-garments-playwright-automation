import { Page, Locator } from '@playwright/test';

export class SuccessModal {
  readonly page: Page;
  readonly modal: Locator;
  readonly closeBtn: Locator;
  readonly orderIdDisplay: Locator;
  readonly orderSummaryContainer: Locator;
  readonly deliveryInfoContainer: Locator;
  readonly whatsappButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('#successModal');
    this.closeBtn = page.locator('#successModal .close-modal');
    this.orderIdDisplay = page.locator('#orderIdDisplay');
    this.orderSummaryContainer = page.locator('#successOrderSummary');
    this.deliveryInfoContainer = page.locator('#successDeliveryInfo');
    this.whatsappButton = page.locator('#successWhatsappLink');
  }

  async getOrderIdText(): Promise<string> {
    return (await this.orderIdDisplay.textContent()) || '';
  }

  async getWhatsappHref(): Promise<string> {
    return (await this.whatsappButton.getAttribute('href')) || '';
  }

  async close() {
    await this.closeBtn.click();
  }
}
