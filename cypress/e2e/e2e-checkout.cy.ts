import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

describe('SauceDemo E-Commerce End-to-End Suite', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('TC01 - Verify valid user can log in and see product catalog', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.validUser.username, users.validUser.password);
      inventoryPage.getTitle().should('be.visible').and('contain.text', 'Products');
    });
  });

  it('TC02 - Verify error message for locked out customer', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.lockedUser.username, users.lockedUser.password);
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('contain.text', 'Sorry, this user has been locked out.');
    });
  });

  it('TC03 - Verify product can be added to cart and cart counter reflects item', () => {
    cy.loginViaUI('standard_user', 'secret_sauce');
    inventoryPage.addBackpackToCart();
    inventoryPage.getCartBadge().should('be.visible').and('have.text', '1');
  });
});

