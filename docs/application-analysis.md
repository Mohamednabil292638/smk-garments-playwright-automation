# SMK Shri Ayyappa Garments — Application Analysis & Automation Decomposition

## 1. Application Overview

- **Application Name:** S.M.K. SHRI AYYAPPA GARMENTS E-Commerce Platform
- **Application Type:** Responsive Client-Side Single Page & Multi-Page Web Application
- **Target Audience:** Wholesale buyers, retailers, and individual consumers purchasing export surplus garment combo packs in India.
- **Frontend Stack:** HTML5, CSS3 (Vanilla + Custom Grid + Glassmorphism), JavaScript (ES6+ Vanilla JS).
- **Data Persistence:** Client-side static catalog loaded via `fetch('data/products.json')`, state stored in `localStorage['smk_cart']`.
- **Backend / Database Status:** **No backend API or SQL database present.** Client-side application with simulated checkout & WhatsApp order dispatch.

---

## 2. Directory & Component Structure (Application Under Test)

```
D:\smk-shri-ayyappa-garments\
├── index.html               # Homepage (Hero banner, preview grids, wholesale features)
├── mens-wear.html           # Men's Wear catalog grid page
├── ladies-wear.html         # Ladies' Wear catalog grid page
├── product-details.html     # Product Details Page (PDP with query param ?id=...)
├── wholesale.html           # Wholesale ordering guide & bulk inquiry CTAs
├── about.html               # Store info, values, infrastructure details
├── contact.html             # Store address, contact details & inquiry form
├── data/
│   └── products.json        # Static catalog data (10 products: 5 Men's, 5 Ladies')
├── js/
│   ├── products.json        # Fetch & render grid products
│   ├── cart.js              # LocalStorage cart drawer management (add, update, remove, total)
│   ├── checkout.js          # Indian state/city dynamic dropdown, checkout form validation, payment prep
│   ├── product-details.js   # PDP page renderer, size/color selectors, image zoom
│   ├── product-select-modal.js # Global product selection modal overlay
│   ├── script.js            # Navbar sticky header, mobile menu toggle, smooth scroll
│   └── animations.js        # Intersection observer animations
└── css/                     # CSS stylesheets (style.css, responsive.css, animations.css)
```

---

## 3. UI Flow & Automatable Workflows

### Workflow 1: Catalog Navigation & Browsing
- Navigate between Header pages: Home (`index.html`), Men's Wear (`mens-wear.html`), Ladies Wear (`ladies-wear.html`), Wholesale (`wholesale.html`), About (`about.html`), Contact (`contact.html`).
- Mobile menu toggle open/close.
- Verify product preview grids on Homepage (3 products max per category).
- Verify full product grids on Category pages (5 products for Men's, 5 products for Ladies').

### Workflow 2: Global Product Selection Modal
- Clicking "Add to Cart" from grid cards opens `#productSelectModal`.
- Modal displays image, title, per piece price, combo price.
- Size options picker (M, L, XL / L, XL, 2XL / XL, XXL / XL, 2XL, 3XL).
- Color options picker (Black, White, Navy Blue, Beige, Grey).
- Quantity controls (increment/decrement combo pack multiplier).
- Validation check: Cannot confirm without selecting Size and Color.
- Confirm adds item to cart and opens `#cartDrawer`.

### Workflow 3: Product Details Page (PDP) Workflow
- Navigate to `product-details.html?id=mens-001`.
- PDP dynamic breadcrumbs and document title check.
- Size and Color selection button states.
- Image zoom container hover effect setup.
- PDP inline validation messages when clicking "Add to Cart" without selection.
- PDP quantity controls calculating total pieces (`= Qty * MOQ`).
- Successful addition to cart updating header count badge.

### Workflow 4: Shopping Cart Drawer Management
- Cart drawer open/close via navbar cart button or backdrop overlay.
- Empty cart state UI display when cart array is empty.
- Multi-item aggregation with distinct Size/Color parameters.
- Quantity modification (`+` / `-`) recalculating per item and cart total (`₹`).
- Item removal via trash icon button.
- Cart count badge pulse animation and text update.
- LocalStorage state persistence across page reloads.

### Workflow 5: Indian Checkout & Form Validation Flow
- Clicking "Proceed to Checkout" from cart opens `#checkoutModal`.
- Itemized summary table with combo calculations.
- Indian State and City dropdown dependent logic:
  - Select State (e.g. `Tamil Nadu` -> populates `Chennai`, `Coimbatore`, `Tiruppur`, etc.).
  - Select State (e.g. `Maharashtra` -> populates `Mumbai`, `Pune`, `Nagpur`, etc.).
  - City dropdown disabled when no State selected.
- Form Validation constraints:
  - Phone input: Restricts non-numeric inputs, max 10 digits. Triggers alert if `<10` digits.
  - Pincode input: Restricts non-numeric inputs, max 6 digits. Triggers alert if `<6` digits.
  - Full Name input: Restricts numeric inputs, min length 2 chars.
- Payment Preparation Modal (`#paymentPrepModal`) transition upon successful checkout form validation.

### Workflow 6: Order Completion & WhatsApp Integration
- Finalizing payment in `#paymentPrepModal` calls `completeOrder()`.
- Generates 8-digit unique Order ID format: `SMK<timestamp_digits>`.
- Displays `#successModal` showing:
  - Order ID display label.
  - Itemized items ordered breakdown.
  - Formatted delivery address block.
  - WhatsApp Order link formatted as: `https://wa.me/919994111762?text=...` encoding Order ID, item breakdown, total price, customer name, phone, and delivery address.
- Resets cart state in localStorage and resets checkout form inputs.

### Workflow 7: Contact Form & Information
- Contact details display (Store address in Tiruppur, Owner phone, Orders WhatsApp).
- Google Maps store location iframe.
- Contact form input fields (`full name`, `phone`, `email`, `message`) triggering submission alert.

---

## 4. Workflows Selected for Playwright Automation

1. **`home.spec.ts`**: Home page hero banner, navigation menu, and category preview grid rendering.
2. **`catalog.spec.ts`**: Catalog browsing for Men's Wear & Ladies Wear, product cards, pricing, size tags, and badges.
3. **`pdp.spec.ts`**: PDP navigation, breadcrumb validation, mandatory size/color validation error messages, quantity increment/decrement, and PDP add-to-cart.
4. **`cart.spec.ts`**: Cart drawer toggle, empty state, item quantity update, item removal, total price calculation, and cart count badge sync.
5. **`checkout.spec.ts`**: Complete E2E purchase flow from catalog selection to Order Success Modal, dynamic State-City dropdown selection, phone/pincode input validation, Order ID format assertion, and WhatsApp deep-link URL verification.
6. **`contact.spec.ts`**: Contact page business info verification and inquiry form interaction.
7. **`responsive.spec.ts`**: Mobile viewport layout testing, hamburger drawer menu toggle, mobile nav WhatsApp CTA.
8. **`catalog-data-validation.spec.ts`**: Data integrity check verifying `products.json` catalog items, prices, minimum order quantities, and schema attributes.

---

## 5. Non-Automatable / Excluded Scope (Honest SDET Assessment)

- **Backend API Testing:** Excluded. AUT is static frontend without API endpoints.
- **SQL / Database Validation:** Excluded. AUT has no connected database.
- **Live Payment Gateway Execution:** AUT uses simulated payment prep flow triggering `completeOrder()`. Playwright tests simulate the client payment step without executing actual bank transactions.
