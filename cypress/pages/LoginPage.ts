export class LoginPage {
  visit() {
    cy.visit('/');
  }

  getUsernameInput() {
    return cy.get('#user-name');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getLoginButton() {
    return cy.get('#login-button');
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  login(username: string, pass: string) {
    this.getUsernameInput().clear().type(username);
    this.getPasswordInput().clear().type(pass);
    this.getLoginButton().click();
  }
}
