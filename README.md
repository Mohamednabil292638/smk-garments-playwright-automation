````markdown
# SMK Garments - Playwright Test Automation

This repository contains the automated testing project for the SMK Shri Ayyappa Garments e-commerce website.

The purpose of this project is to automate important user flows of the website and make the testing process more reliable and repeatable.

The application under test was developed separately, while this repository contains the Playwright automation code.

## Application Under Test

SMK Shri Ayyappa Garments is an e-commerce website for browsing garment products and placing customer orders.

Application repository:

https://github.com/Mohamednabil292638/smk-garments-ecommerce

The website includes product categories, product details, cart functionality, checkout-related flows and customer interaction pages.

## Technology Used

- Playwright
- TypeScript
- JavaScript
- Node.js
- Page Object Model
- Git
- GitHub

## Project Structure

```text
smk-garments-playwright-automation/
│
├── docs/
│   ├── application-analysis.md
│   ├── test-cases.md
│   └── test-plan.md
│
├── fixtures/
│   └── testFixtures.ts
│
├── pages/
│   ├── CartDrawer.ts
│   ├── CheckoutModal.ts
│   ├── ContactPage.ts
│   ├── HomePage.ts
│   ├── NavigationComponent.ts
│   ├── PaymentPrepModal.ts
│   ├── ProductDetailsPage.ts
│   ├── ProductSelectModal.ts
│   ├── ProductsPage.ts
│   └── SuccessModal.ts
│
├── tests/
│   ├── cart.spec.ts
│   ├── catalog.spec.ts
│   ├── home.spec.ts
│   └── pdp.spec.ts
│
├── utils/
│   └── testData.ts
│
├── .gitignore
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
└── tsconfig.json
````

## Page Object Model

The project uses the Page Object Model (POM) to organize the automation code.

Page-specific locators and actions are maintained in separate classes, while test files focus on the actual test scenarios.

Some of the page and component classes used in the project are:

* HomePage
* ProductsPage
* ProductDetailsPage
* CartDrawer
* CheckoutModal
* SuccessModal
* ContactPage
* NavigationComponent

This approach helps keep the automation code organized and easier to maintain.

## Test Coverage

The current automation suite includes test scenarios for:

* Home page
* Product catalog
* Product details
* Product selection
* Shopping cart
* Checkout-related workflows
* User interactions and validations

The detailed test scenarios are maintained in the `docs` directory.

## Test Documentation

### Application Analysis

`docs/application-analysis.md`

Contains the analysis of the application under test and the areas selected for automation.

### Test Plan

`docs/test-plan.md`

Contains the testing scope, approach and planned testing activities.

### Test Cases

`docs/test-cases.md`

Contains the functional test scenarios and expected results used for automation.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Mohamednabil292638/smk-garments-playwright-automation.git
```

### 2. Navigate to the project

```bash
cd smk-garments-playwright-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests using Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/home.spec.ts
```

## TypeScript Check

Check the TypeScript code without generating JavaScript files:

```bash
npx tsc --noEmit
```

## Test Report

After running the tests, the Playwright HTML report can be opened using:

```bash
npx playwright show-report
```

The report can be used to review test execution and investigate failures.

## Debugging

For interactive debugging:

```bash
npx playwright test --debug
```

Screenshots, traces and other debugging options are configured in `playwright.config.ts`.

## Browser Testing

The Playwright configuration supports browser-based testing using:

* Chromium
* Firefox
* WebKit

The required browser projects can be selected through the Playwright configuration and command-line options.

## Automation Approach

The testing workflow followed in this project is:

```text
Application Analysis
        ↓
Identify User Workflows
        ↓
Prepare Test Cases
        ↓
Create Page Objects
        ↓
Write Playwright Tests
        ↓
Execute Tests
        ↓
Analyze Failures
        ↓
Debug and Improve
        ↓
Run Regression Tests
```

## Project Scope

The application under test is a client-side e-commerce website.

The automation framework focuses on testing the functionality available through the actual application UI.

The framework does not create artificial API or database tests when those services are not available in the application.

## Future Improvements

The framework can be extended with:

* Additional checkout scenarios
* More positive and negative test cases
* Additional responsive testing
* Cross-browser regression execution
* Improved test data management
* Additional reporting
* Continuous integration execution
* API and database validation when backend services are available

## Project Goal

This project was created as a practical test automation project to understand how an SDET can analyze an existing web application, identify important user workflows, design reusable page objects, create automated test cases and maintain the automation code using Git and GitHub.

## Author

**Mohamed Nabil S**

GitHub:

[https://github.com/Mohamednabil292638](https://github.com/Mohamednabil292638)

```

### After pasting

On GitHub:

**Scroll down → Commit changes → Commit directly to `main` → Commit changes.**

That's all. ✅

**Don't change the README wording yet.** After we get Node.js working and actually execute the tests, we'll update the README with the **real test coverage/results** rather than making unsupported claims.
```
