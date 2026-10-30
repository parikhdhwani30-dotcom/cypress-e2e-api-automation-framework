# Cypress E2E & API Automation Framework
**Author:** Dhwani Parikh  
**Technology Stack:** TypeScript, Cypress 13, Page Object Model, Custom Commands, Fixtures, REST API Testing

---

## 1. Overview
This repository contains a unified **Web E2E and API Automation Testing Framework** built with **Cypress** and **TypeScript**. It demonstrates both front-end UI testing using the Page Object Model and direct back-end REST API validation via `cy.request()`.

Target Applications under test:
- UI: [SauceDemo E-Commerce](https://www.saucedemo.com/)
- API: [ReqRes REST API](https://reqres.in/)

---

## 2. Key Architectural Highlights
- **Unified UI + API Framework:** Covers both browser end-to-end flows and microservice API contracts in one test harness.
- **Page Object Model (POM):** Clean UI separation in `cypress/pages/` (`LoginPage.ts`, `InventoryPage.ts`).
- **Data-Driven Fixtures:** Test data externalized into `cypress/fixtures/users.json`.
- **Reusable Custom Commands:** Modular helper commands (`cy.loginViaUI`) declared in `cypress/support/commands.ts`.
- **Headless & Headed CI/CD Execution:** Runs across Chrome, Electron, and Firefox.

---

## 3. Project Structure
```text
cypress-e2e-api-automation-framework/
├── cypress/
│   ├── e2e/
│   │   ├── e2e-checkout.cy.ts  # End-to-end UI scenarios
│   │   └── api-users.cy.ts     # REST API testing (GET, POST, DELETE)
│   ├── fixtures/
│   │   └── users.json          # Test data inputs
│   ├── pages/
│   │   ├── LoginPage.ts        # Login Page Object
│   │   └── InventoryPage.ts    # Inventory Page Object
│   └── support/
│       ├── commands.ts         # Custom Cypress commands
│       └── e2e.ts              # Global support configuration
├── cypress.config.ts           # Cypress configuration
├── package.json                # Dependencies and npm test scripts
├── tsconfig.json               # TypeScript config
└── README.md
```

---

## 4. Execution Commands

### Install Dependencies
```bash
npm install
```

### Run All Tests Headless (UI + API)
```bash
npm run test:all
```

### Run UI Tests Only
```bash
npm run test:e2e
```

### Run API Tests Only
```bash
npm run test:api
```

### Open Interactive Cypress Test Runner
```bash
npm run cypress:open
```

