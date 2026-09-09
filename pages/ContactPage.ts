import { Page, Locator } from '@playwright/test';
import { NavigationComponent } from './NavigationComponent.js';

export class ContactPage {
  readonly page: Page;
  readonly nav: NavigationComponent;
  readonly pageTitle: Locator;
  readonly contactCards: Locator;
  readonly mapIframe: Locator;
  readonly nameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavigationComponent(page);
    this.pageTitle = page.locator('.page-banner-title');
    this.contactCards = page.locator('.contact-card');
    this.mapIframe = page.locator('.contact-map iframe');
    this.nameInput = page.locator('#contactName');
    this.phoneInput = page.locator('#contactPhone');
    this.emailInput = page.locator('#contactEmail');
    this.messageTextarea = page.locator('#contactMsg');
    this.submitBtn = page.locator('form button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/contact.html');
  }

  async fillInquiryForm(name: string, phone: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.phoneInput.fill(phone);
    if (email) await this.emailInput.fill(email);
    await this.messageTextarea.fill(message);
  }

  async submitForm() {
    await this.submitBtn.click();
  }
}
