import { Page, Locator } from '@playwright/test';
import { CustomerDetails } from '../utils/testData.js';

export class CheckoutModal {
  readonly page: Page;
  readonly modal: Locator;
  readonly closeBtn: Locator;
  readonly checkoutItemsContainer: Locator;
  readonly checkoutTotalText: Locator;
  readonly nameInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly stateSelect: Locator;
  readonly citySelect: Locator;
  readonly pincodeInput: Locator;
  readonly submitPaymentBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('#checkoutModal');
    this.closeBtn = page.locator('.close-checkout');
    this.checkoutItemsContainer = page.locator('#checkoutItems');
    this.checkoutTotalText = page.locator('#checkoutTotal');
    this.nameInput = page.locator('#custName');
    this.phoneInput = page.locator('#custPhone');
    this.addressInput = page.locator('#custAddress');
    this.stateSelect = page.locator('#custState');
    this.citySelect = page.locator('#custCity');
    this.pincodeInput = page.locator('#custPincode');
    this.submitPaymentBtn = page.locator('#checkoutForm button[type="submit"]');
  }

  async close() {
    await this.closeBtn.click();
  }

  async selectState(stateName: string) {
    await this.stateSelect.selectOption({ label: stateName });
  }

  async selectCity(cityName: string) {
    await this.citySelect.selectOption({ label: cityName });
  }

  async fillCustomerDetails(details: CustomerDetails) {
    await this.nameInput.fill(details.name);
    await this.phoneInput.fill(details.phone);
    await this.addressInput.fill(details.address);
    await this.selectState(details.state);
    // Wait for city options to populate
    await this.page.waitForTimeout(200);
    await this.selectCity(details.city);
    await this.pincodeInput.fill(details.pincode);
  }

  async submitCheckoutForm() {
    await this.submitPaymentBtn.click();
  }
}
