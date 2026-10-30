// Custom Cypress Commands
declare namespace Cypress {
  interface Chainable {
    loginViaUI(username: string, pass: string): Chainable<void>;
  }
}

Cypress.Commands.add('loginViaUI', (username: string, pass: string) => {
  cy.visit('/');
  cy.get('#user-name').type(username);
  cy.get('#password').type(pass);
  cy.get('#login-button').click();
});
