import { Page, Locator } from '@playwright/test';
import { NavigationComponent } from './NavigationComponent.js';

export class HomePage {
  readonly page: Page;
  readonly nav: NavigationComponent;
  readonly heroTitle: Locator;
  readonly heroSubtitle: Locator;
  readonly exploreMensBtn: Locator;
  readonly exploreLadiesBtn: Locator;
  readonly mensPreviewGrid: Locator;
  readonly ladiesPreviewGrid: Locator;
  readonly mensPreviewCards: Locator;
  readonly ladiesPreviewCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavigationComponent(page);
    this.heroTitle = page.locator('.hero-title');
    this.heroSubtitle = page.locator('.hero-subtitle');
    this.exploreMensBtn = page.locator('.hero-buttons a:has-text("Explore Men\'s Collection")');
    this.exploreLadiesBtn = page.locator('.hero-buttons a:has-text("Explore Ladies Wear")');
    this.mensPreviewGrid = page.locator('#mens-preview-grid');
    this.ladiesPreviewGrid = page.locator('#ladies-preview-grid');
    this.mensPreviewCards = page.locator('#mens-preview-grid .product-card');
    this.ladiesPreviewCards = page.locator('#ladies-preview-grid .product-card');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickExploreMens() {
    await this.exploreMensBtn.click();
  }

  async clickExploreLadies() {
    await this.exploreLadiesBtn.click();
  }

  async getMensPreviewCount(): Promise<number> {
    return await this.mensPreviewCards.count();
  }

  async getLadiesPreviewCount(): Promise<number> {
    return await this.ladiesPreviewCards.count();
  }
}
