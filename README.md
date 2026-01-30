# 🏗 BestCity UI Automation Framework

This project contains an end-to-end UI automation test framework for the
**BestCity web platform** using:

-   Selenium WebDriver
-   Cucumber (BDD)
-   JavaScript (Node.js)
-   Page Object Model (POM)
-   GitHub Actions CI/CD
-   Cucumber HTML Reports

------------------------------------------------------------------------

## 📌 Tech Stack

-   Node.js
-   Selenium WebDriver
-   Cucumber.js
-   Chai Assertions
-   cucumber-html-reporter
-   GitHub Actions

------------------------------------------------------------------------

## 📁 Project Structure

    ui-tests/
    │
    ├── features/                 # Gherkin feature files
    │   ├── home.feature
    │   ├── about.feature
    │   ├── properties.feature
    │   ├── faq.feature
    │   └── footer.feature
    │
    ├── step_definitions/         # Step implementations
    │
    ├── pages/                    # Page Object Model classes
    │   ├── HomePage.js
    │   ├── AboutPage.js
    │   ├── PropertiesPage.js
    │   └── FaqPage.js
    │
    ├── support/
    │   ├── hooks.js
    │   ├── world.js
    │   └── report.js
    │
    ├── reports/                  # HTML & JSON reports
    │
    ├── .github/workflows/ci.yml  # CI pipeline
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 🚀 How to Run Tests Locally

### 1. Install dependencies

``` bash
npm install
```

### 2. Run all tests

``` bash
npx cucumber-js
```

or

``` bash
npm test
```

------------------------------------------------------------------------

## 🏷 Run by Tags

``` bash
npx cucumber-js --tags "@smoke"
npx cucumber-js --tags "@regression"
```

------------------------------------------------------------------------

## 📊 Test Report

After execution open:

    reports/cucumber-report.html

------------------------------------------------------------------------

## 🔄 CI/CD Pipeline

Tests run automatically on:

-   Push to `main`
-   Pull Requests

GitHub Actions workflow:

    .github/workflows/ci.yml

------------------------------------------------------------------------

## 📸 Screenshots on Failure

Screenshots are automatically captured on failure and stored in:

    /screenshots

------------------------------------------------------------------------

## 🧪 Covered Scenarios

-   Home page validation (all sections)
-   About page sections
-   Properties page cards
-   FAQ expand/collapse
-   Footer navigation links

------------------------------------------------------------------------

## 👥 Collaboration

To give access to collaborators: GitHub -> Settings -> Collaborators -> Add
user.

------------------------------------------------------------------------

## 📌 Author

Created by: **Dinko Kavarov**\
Role: QA Automation Engineer

-----------------------------------------------------------------------