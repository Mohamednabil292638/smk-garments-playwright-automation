import { test, expect } from '../fixtures/testFixtures.js';
import { TEST_PRODUCTS } from '../utils/testData.js';

test.describe('Shopping Cart Drawer Suite', () => {

  test('TC-CRT-001: Should open and close cart drawer via header icon and close button', async ({ homePage, cartDrawer }) => {
    await homePage.goto();

    await homePage.nav.openCartDrawer();
    await expect(cartDrawer.drawer).toHaveClass(/open/);
    await expect(cartDrawer.emptyCartMessage).toBeVisible();

    await cartDrawer.closeDrawer();
    await expect(cartDrawer.drawer).not.toHaveClass(/open/);
  });

  test('TC-CRT-002: Should adjust cart item quantity (+ / −) and update total price', async ({ pdpPage, cartDrawer }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);
    await pdpPage.selectSize('M');
    await pdpPage.selectColor('Navy Blue');
    await pdpPage.clickAddToCart();

    await expect(cartDrawer.drawer).toHaveClass(/open/);
    await expect(cartDrawer.getCartTotalText()).toContainText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice.toLocaleString('en-IN')}`);

    await cartDrawer.incrementItemQty(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    const expectedDoublePrice = TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice * 2;
    await expect(cartDrawer.getCartTotalText()).toContainText(`₹${expectedDoublePrice.toLocaleString('en-IN')}`);

    await cartDrawer.decrementItemQty(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    await expect(cartDrawer.getCartTotalText()).toContainText(`₹${TEST_PRODUCTS.MENS_DROP_SHOULDER.comboPrice.toLocaleString('en-IN')}`);
  });

  test('TC-CRT-003: Should remove item from cart when trash icon button is clicked', async ({ pdpPage, cartDrawer }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);
    await pdpPage.selectSize('L');
    await pdpPage.selectColor('White');
    await pdpPage.clickAddToCart();

    await expect(cartDrawer.drawer).toHaveClass(/open/);
    expect(await cartDrawer.getItemCount()).toBe(1);

    await cartDrawer.removeItem(TEST_PRODUCTS.MENS_DROP_SHOULDER.name);
    expect(await cartDrawer.getItemCount()).toBe(0);
    await expect(cartDrawer.emptyCartMessage).toBeVisible();
  });

  test('TC-CRT-004: Should persist cart items in localStorage across page reloads', async ({ pdpPage, cartDrawer, homePage }) => {
    await pdpPage.gotoProduct(TEST_PRODUCTS.MENS_DROP_SHOULDER.id);
    await pdpPage.selectSize('L');
    await pdpPage.selectColor('Navy Blue');
    await pdpPage.clickAddToCart();

    await expect(cartDrawer.drawer).toHaveClass(/open/);
    await cartDrawer.closeDrawer();

    await pdpPage.page.reload();

    const badgeText = await homePage.nav.getBadgeCountText();
    expect(badgeText).toBe('1');

    await homePage.nav.openCartDrawer();
    expect(await cartDrawer.getItemCount()).toBe(1);
  });
});
