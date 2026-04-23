class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    homeLogo: () => cy.get('.app_logo'),
    inventoryList: () => cy.get('.inventory_list')
  };

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }

  verifyHomePage() {
    cy.url().should("include", "/inventory");
    this.elements.homeLogo().should("be.visible");
    this.elements.inventoryList().should("be.visible");
  }
}

export default new LoginPage();