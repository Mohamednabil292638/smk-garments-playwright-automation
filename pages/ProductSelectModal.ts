import { Page, Locator } from '@playwright/test';

export class ProductSelectModal {
  readonly page: Page;
  readonly modalOverlay: Locator;
  readonly modalContent: Locator;
  readonly closeBtn: Locator;
  readonly productImg: Locator;
  readonly productTitle: Locator;
  readonly productType: Locator;
  readonly pricePerPiece: Locator;
  readonly priceCombo: Locator;
  readonly sizeButtons: Locator;
  readonly colorButtons: Locator;
  readonly sizeErrorMsg: Locator;
  readonly colorErrorMsg: Locator;
  readonly qtyDecreaseBtn: Locator;
  readonly qtyIncreaseBtn: Locator;
  readonly qtyValue: Locator;
  readonly qtyTotalText: Locator;
  readonly confirmAddBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalOverlay = page.locator('#productSelectModal');
    this.modalContent = page.locator('.psm-content');
    this.closeBtn = page.locator('.psm-close');
    this.productImg = page.locator('#psmImg');
    this.productTitle = page.locator('#psmTitle');
    this.productType = page.locator('#psmType');
    this.pricePerPiece = page.locator('#psmPricePer');
    this.priceCombo = page.locator('#psmPriceCombo');
    this.sizeButtons = page.locator('.psm-size-btn');
    this.colorButtons = page.locator('.psm-color-btn');
    this.sizeErrorMsg = page.locator('#psmSizeError');
    this.colorErrorMsg = page.locator('#psmColorError');
    this.qtyDecreaseBtn = page.locator('.psm-qty-btn', { hasText: '−' });
    this.qtyIncreaseBtn = page.locator('.psm-qty-btn', { hasText: '+' });
    this.qtyValue = page.locator('#psmQtyVal');
    this.qtyTotalText = page.locator('#psmQtyTotal');
    this.confirmAddBtn = page.locator('#psmAddBtn');
  }

  async selectSize(size: string) {
    await this.page.locator('.psm-size-btn', { hasText: size }).first().click();
  }

  async selectColor(colorName: string) {
    await this.page.locator(`.psm-color-btn[title="${colorName}"]`).click();
  }

  async incrementQuantity() {
    await this.qtyIncreaseBtn.click();
  }

  async decrementQuantity() {
    await this.qtyDecreaseBtn.click();
  }

  async confirmAddToCart() {
    await this.confirmAddBtn.click();
  }

  async closeModal() {
    await this.closeBtn.click();
  }
}
