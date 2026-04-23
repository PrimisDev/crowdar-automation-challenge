# 🧪 Crowdar Automation Framework

## 📌 Overview

This project is a test automation framework built using **Cypress**, **Cucumber (BDD)**, and **JavaScript**.
It covers both **UI testing** and **API testing**, following best practices such as **Page Object Model (POM)** and **data separation**.

---

## 🚀 Tech Stack

* **Cypress** – End-to-End testing framework
* **Cucumber (Gherkin)** – BDD approach
* **JavaScript (Node.js)**
* **Mochawesome Reporter** – HTML reports with screenshots

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/PrimisDev/crowdar-automation-challenge
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Open Cypress (optional - UI mode)

```bash
npx cypress open
```

---

## 📁 Project Structure

```
cypress/
  e2e/                  → Feature files (.feature)
  pages/                → Page Object Model (POM)
  support/
    step_definitions/   → Step definitions
    data/               → Test data (usersLibrary)
Cypress/
  reports/              → HTML reports + screenshots
```

---

## 🧠 Design Decisions

* **POM (Page Object Model)** used to separate UI logic from test logic
* **Cucumber** for readable and maintainable test scenarios
* **Users Library** to centralize test data and avoid hardcoding credentials
* **Tags (@API, @Cart, etc.)** to control test execution
* **Mochawesome Reporter** for rich HTML reporting with embedded screenshots

---

## ▶️ How to Run Tests

### Run all tests

```bash
npm run test
```

### Run tests in Chrome

```bash
npm run test:chrome
```

### Run tests in Firefox

```bash
npm run test:firefox
```

### Run only API tests

```bash
npm run test:api
```

---

## 🧪 Test Coverage

### UI Tests

* Login with multiple users
* Add product to cart
* Remove product from cart

### API Test

* GET request to Mercado Libre endpoint
* Validates response status and content

---

## 📊 Reports

After execution, an HTML report is generated:

```
Cypress/reports/html/index.html
```

Includes:

* Test results
* Execution details
* Embedded screenshots on failure

---

## 🔒 Test Data Management

User credentials are stored in a **users library**:

```
cypress/support/data/usersLibrary.js
```

This approach avoids hardcoding values in test steps and improves maintainability.

---

## 💡 Notes

* Cypress automatically creates artifact folders (e.g., screenshots)
* Reporter is configured to embed screenshots into the HTML report
* Project is designed to be easily scalable

---

## 👨‍💻 Author

Martin Grasselli
QA Automation Engineer
