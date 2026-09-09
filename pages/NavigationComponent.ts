import { Page, Locator } from '@playwright/test';

export class NavigationComponent {
  readonly page: Page;
  readonly brandLogo: Locator;
  readonly navHome: Locator;
  readonly navMensWear: Locator;
  readonly navLadiesWear: Locator;
  readonly navWholesale: Locator;
  readonly navAbout: Locator;
  readonly navContact: Locator;
  readonly desktopWhatsappBtn: Locator;
  readonly mobileWhatsappBtn: Locator;
  readonly mobileMenuToggle: Locator;
  readonly cartButton: Locator;
  readonly cartBadgeCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.brandLogo = page.locator('a.logo-brand');
    this.navHome = page.locator('.nav-links a:has-text("Home")');
    this.navMensWear = page.locator('.nav-links a:has-text("Men\'s Wear")');
    this.navLadiesWear = page.locator('.nav-links a:has-text("Ladies Wear")');
    this.navWholesale = page.locator('.nav-links a:has-text("Wholesale")');
    this.navAbout = page.locator('.nav-links a:has-text("About")');
    this.navContact = page.locator('.nav-links a:has-text("Contact")');
    this.desktopWhatsappBtn = page.locator('.nav-btn-desktop');
    this.mobileWhatsappBtn = page.locator('.nav-cta-mobile');
    this.mobileMenuToggle = page.locator('.mobile-menu-toggle');
    this.cartButton = page.locator('#cartToggleBtn');
    this.cartBadgeCount = page.locator('#cartCount');
  }

  async navigateToHome() {
    await this.navHome.click();
  }

  async navigateToMensWear() {
    await this.navMensWear.click();
  }

  async navigateToLadiesWear() {
    await this.navLadiesWear.click();
  }

  async navigateToWholesale() {
    await this.navWholesale.click();
  }

  async navigateToAbout() {
    await this.navAbout.click();
  }

  async navigateToContact() {
    await this.navContact.click();
  }

  async toggleMobileMenu() {
    await this.mobileMenuToggle.click();
  }

  async openCartDrawer() {
    await this.cartButton.click();
  }

  async getBadgeCountText(): Promise<string> {
    return (await this.cartBadgeCount.textContent()) || '0';
  }
}
