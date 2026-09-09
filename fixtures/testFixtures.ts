import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { ProductDetailsPage } from '../pages/ProductDetailsPage.js';
import { ProductSelectModal } from '../pages/ProductSelectModal.js';
import { CartDrawer } from '../pages/CartDrawer.js';
import { CheckoutModal } from '../pages/CheckoutModal.js';
import { PaymentPrepModal } from '../pages/PaymentPrepModal.js';
import { SuccessModal } from '../pages/SuccessModal.js';
import { ContactPage } from '../pages/ContactPage.js';

type CustomFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
  pdpPage: ProductDetailsPage;
  productSelectModal: ProductSelectModal;
  cartDrawer: CartDrawer;
  checkoutModal: CheckoutModal;
  paymentPrepModal: PaymentPrepModal;
  successModal: SuccessModal;
  contactPage: ContactPage;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  pdpPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  productSelectModal: async ({ page }, use) => {
    await use(new ProductSelectModal(page));
  },
  cartDrawer: async ({ page }, use) => {
    await use(new CartDrawer(page));
  },
  checkoutModal: async ({ page }, use) => {
    await use(new CheckoutModal(page));
  },
  paymentPrepModal: async ({ page }, use) => {
    await use(new PaymentPrepModal(page));
  },
  successModal: async ({ page }, use) => {
    await use(new SuccessModal(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
});

export { expect } from '@playwright/test';
