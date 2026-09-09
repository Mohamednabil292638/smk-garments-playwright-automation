import { test, expect } from '../fixtures/testFixtures.js';
import { TEST_PRODUCTS } from '../utils/testData.js';

test.describe('Product Catalog & Global Modal Suite', () => {

  test('TC-CAT-001: Should render all Men\'s Wear catalog products with pricing and badges', async ({ productsPage }) => {
    await productsPage.gotoMensWear();
    await expect(productsPage.pageTitle).toHaveText("Men's Collection");

    const cardCount = await productsPage.getProductCardCount();
    expect(cardCount).toBe(5);

    const targetCard = productsPage.getProductCardByName(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(targetCard).toBeVisible();
    await expect(targetCard.locator('.product-price')).toContainText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.price}`);
    await expect(targetCard.locator('.product-combo')).toContainText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice}`);
  });

  test('TC-CAT-002: Should render all Ladies\' Wear catalog products with pricing', async ({ productsPage }) => {
    await productsPage.gotoLadiesWear();
    await expect(productsPage.pageTitle).toHaveText("Ladies Wear Collection");

    const cardCount = await productsPage.getProductCardCount();
    expect(cardCount).toBe(5);

    const targetCard = productsPage.getProductCardByName(TEST_PRODUCTS.LADIES_LEGGINGS.name);
    await expect(targetCard).toBeVisible();
    await expect(targetCard.locator('.product-price')).toContainText(`₹${TEST_PRODUCTS.LADIES_LEGGINGS.price}`);
  });

  test('TC-MOD-001: Should trigger Global Product Selection Modal when clicking Add to Cart on product card', async ({ productsPage, productSelectModal }) => {
    await productsPage.gotoMensWear();
    await productsPage.clickAddToCartForProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);

    await expect(productSelectModal.modalOverlay).toHaveClass(/active/);
    await expect(productSelectModal.productTitle).toHaveText(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(productSelectModal.priceCombo).toHaveText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice}`);
  });

  test('TC-MOD-002: Should display size and color validation errors when confirming modal without selections', async ({ productsPage, productSelectModal }) => {
    await productsPage.gotoMensWear();
    await productsPage.clickAddToCartForProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);

    await expect(productSelectModal.modalOverlay).toHaveClass(/active/);
    await productSelectModal.confirmAddToCart();

    await expect(productSelectModal.sizeErrorMsg).toHaveClass(/show/);
    await expect(productSelectModal.colorErrorMsg).toHaveClass(/show/);
  });

  test('TC-MOD-003: Should select options in global modal and successfully add product to cart', async ({ productsPage, productSelectModal, cartDrawer }) => {
    await productsPage.gotoMensWear();
    await productsPage.clickAddToCartForProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);

    await productSelectModal.selectSize('M');
    await productSelectModal.selectColor('Navy Blue');
    await productSelectModal.confirmAddToCart();

    await expect(cartDrawer.drawer).toHaveClass(/open/);
    const itemCount = await cartDrawer.getItemCount();
    expect(itemCount).toBe(1);
    await expect(cartDrawer.getCartItemByName(TEST_PRODUCTS.MENS_DROP_SHOULDER.name)).toBeVisible();
  });
});
