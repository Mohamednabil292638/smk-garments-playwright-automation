import { test, expect } from '../fixtures/testFixtures.js';
import { TEST_PRODUCTS } from '../utils/testData.js';

test.describe('Product Details Page (PDP) Suite', () => {

  test('TC-PDP-001: Should load PDP details and breadcrumbs via query parameter', async ({ pdpPage }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);

    await expect(pdpPage.page).toHaveTitle(new RegExp(TEST_PRODUCTS.MENS_DROP_SHOULDER.name, 'i'));
    await expect(pdpPage.pdpTitle).toHaveText(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(pdpPage.categoryBreadcrumb).toHaveText("Men's Wear");
    await expect(pdpPage.nameBreadcrumb).toHaveText(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(pdpPage.pdpPrice).toHaveText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.price}`);
    await expect(pdpPage.pdpComboPrice).toHaveText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice}`);
  });

  test('TC-PDP-002: Should show validation error messages on PDP when clicking Add to Cart without selections', async ({ pdpPage }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);
    await pdpPage.clickAddToCart();

    await expect(pdpPage.sizeValidationMsg).toHaveClass(/show/);
    await expect(pdpPage.colorValidationMsg).toHaveClass(/show/);
  });

  test('TC-PDP-003: Should update total quantity piece count and button label on quantity increment', async ({ pdpPage }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);

    await pdpPage.selectSize('L');
    await pdpPage.selectColor('Navy Blue');

    await pdpPage.incrementQuantity();
    expect(await pdpPage.getQuantityValue()).toBe('2');
    await expect(pdpPage.qtyTotalText).toHaveText(`= 10 pieces total`);

    const expectedTotalComboPrice = TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice * 2;
    await expect(pdpPage.addToCartBtn).toContainText(`₹${expectedTotalComboPrice.toLocaleString('en-IN')}`);
  });

  test('TC-PDP-004: Should add item to cart from PDP with selected size and color options', async ({ pdpPage, cartDrawer }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);

    await pdpPage.selectSize('XL');
    await pdpPage.selectColor('Black');
    await pdpPage.clickAddToCart();

    await expect(cartDrawer.drawer).toHaveClass(/open/);
    const addedItem = cartDrawer.getCartItemByName(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(addedItem).toBeVisible();
    await expect(addedItem).toContainText('Size: XL');
    await expect(addedItem).toContainText('Color: Black');
  });
});
