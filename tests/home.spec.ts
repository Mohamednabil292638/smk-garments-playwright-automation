import { test, expect } from '../fixtures/testFixtures.js';

test.describe('Homepage & Navigation Suite', () => {

  test('TC-NAV-001: Should load homepage with correct title, brand logo, and hero section', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveTitle(/S.M.K. SHRI AYYAPPA GARMENTS/i);
    await expect(homePage.nav.brandLogo).toBeVisible();
    await expect(homePage.heroTitle).toBeVisible();
    await expect(homePage.heroSubtitle).toContainText('Premium Wholesale Garments');
  });

  test('TC-NAV-002: Should navigate across main pages using top header links', async ({ homePage }) => {
    await homePage.goto();

    await homePage.nav.navigateToMensWear();
    await expect(homePage.page).toHaveURL(/.*mens-wear\.html/);

    await homePage.nav.navigateToLadiesWear();
    await expect(homePage.page).toHaveURL(/.*ladies-wear\.html/);

    await homePage.nav.navigateToWholesale();
    await expect(homePage.page).toHaveURL(/.*wholesale\.html/);

    await homePage.nav.navigateToAbout();
    await expect(homePage.page).toHaveURL(/.*about\.html/);

    await homePage.nav.navigateToContact();
    await expect(homePage.page).toHaveURL(/.*contact\.html/);
  });

  test('TC-NAV-003: Should render max 3 preview items per category on homepage', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.mensPreviewGrid).toBeVisible();
    const mensCount = await homePage.getMensPreviewCount();
    expect(mensCount).toBeGreaterThan(0);
    expect(mensCount).toBeLessThanOrEqual(3);

    await expect(homePage.ladiesPreviewGrid).toBeVisible();
    const ladiesCount = await homePage.getLadiesPreviewCount();
    expect(ladiesCount).toBeGreaterThan(0);
    expect(ladiesCount).toBeLessThanOrEqual(3);
  });

  test('TC-NAV-004: Should navigate to Mens and Ladies pages via hero action buttons', async ({ homePage }) => {
    await homePage.goto();
    await homePage.clickExploreMens();
    await expect(homePage.page).toHaveURL(/.*mens-wear\.html/);

    await homePage.goto();
    await homePage.clickExploreLadies();
    await expect(homePage.page).toHaveURL(/.*ladies-wear\.html/);
  });
});
