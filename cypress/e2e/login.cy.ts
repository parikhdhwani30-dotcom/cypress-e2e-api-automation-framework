import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

describe('User Authentication & Login Validation Suite', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('LOGIN-01 - Should log in successfully with valid customer credentials', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.validUser.username, users.validUser.password);
      inventoryPage.getTitle().should('be.visible').and('contain.text', 'Products');
    });
  });

  it('LOGIN-02 - Should display error message for locked out user', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.lockedUser.username, users.lockedUser.password);
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('contain.text', 'Sorry, this user has been locked out.');
    });
  });

  it('LOGIN-03 - Should display error message for invalid credentials', () => {
    loginPage.login('invalid_user', 'secret_sauce');
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });

  it('LOGIN-04 - Should require username when field is blank', () => {
    loginPage.getPasswordInput().type('secret_sauce');
    loginPage.getLoginButton().click();
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });
});
