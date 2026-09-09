# SMK Garments Test Automation Plan

## 1. Project Overview & Strategy

- **Application Under Test (AUT):** S.M.K. Shri Ayyappa Garments E-Commerce Store
- **Objective:** Design, implement, and maintain a robust, scalable, interview-ready Playwright + TypeScript test automation suite covering all supported front-end user flows.
- **Framework Architecture:** Page Object Model (POM) pattern, custom Playwright test fixtures, modular test data helpers, automatic local server lifecycle management.

---

## 2. In-Scope & Out-of-Scope Workflows

### In-Scope (Automated):
1. **Homepage & Navigation:** Header navbar links, sticky banner, brand logo, section CTAs, footer links.
2. **Product Catalog Browsing:** Category pages (`mens-wear.html`, `ladies-wear.html`), grid layout, product cards, pricing, combo badges, size tags.
3. **Product Details Page (PDP):** Dynamic query parameter navigation, mandatory size/color option validations, quantity increment/decrement, breadcrumbs.
4. **Global Product Selection Modal:** Modal popup trigger on grid card click, size/color validation error popups, quantity multipliers.
5. **Cart Drawer Management:** Cart drawer toggles, item count badge pulse, multi-item variant aggregation, quantity modification, item removal, total price recalculation, `localStorage` persistence.
6. **Checkout & Form Validation:** Dynamic state-city dropdown cascading, input sanitization (numeric phone & pincode), alert dialog handling for invalid inputs.
7. **Order Completion & WhatsApp Integration:** Order submission, 8-digit unique Order ID formatting (`SMK...`), order summary table, formatted delivery details, generated WhatsApp URL params.
8. **Contact Page:** Business contact info display, map iframe render, inquiry form validation.
9. **Responsive Design:** Mobile viewports (iPhone/Pixel), hamburger menu navigation, mobile WhatsApp CTAs.
10. **Data Integrity:** `data/products.json` schema and catalog product attribute validation.

### Out-of-Scope (Documented Limitations):
1. **Backend REST/GraphQL API Automation:** The AUT is a static front-end web application; no backend server APIs exist.
2. **SQL / Database Validation:** The AUT does not use a server-side database; state is managed client-side in `localStorage`.
3. **Third-Party Payment Gateways:** Real banking payment flows (Razorpay/Paytm) are simulated in AUT via local modal prep step.

---

## 3. Test Environment & Configuration

- **Node.js Runtime:** v24+ / LTS
- **Test Runner:** `@playwright/test`
- **Target Browsers:** Chromium, Firefox, WebKit, Mobile Chrome (Pixel 5)
- **Local Web Server:** `http-server` serving `D:\smk-shri-ayyappa-garments` on `http://localhost:3000`
- **CI/CD Integration:** GitHub Actions (`.github/workflows/playwright.yml`)

---

## 4. Entry and Exit Criteria

### Entry Criteria:
- AUT source code loaded at `D:\smk-shri-ayyappa-garments`.
- Playwright test runner and dependencies installed in `D:\smk-garments-playwright-automation`.
- TypeScript compiler configured with zero type errors (`npx tsc --noEmit`).

### Exit Criteria:
- 100% execution pass rate on all automated test suites across configured browsers.
- Playwright HTML test report successfully generated and saved to `playwright-report/`.
- CI workflow configured and validated.
