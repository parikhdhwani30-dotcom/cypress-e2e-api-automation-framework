export class InventoryPage {
  getTitle() {
    return cy.get('.title');
  }

  getAddBackpackButton() {
    return cy.get('#add-to-cart-sauce-labs-backpack');
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  getCartLink() {
    return cy.get('.shopping_cart_link');
  }

  addBackpackToCart() {
    this.getAddBackpackButton().click();
  }

  openCart() {
    this.getCartLink().click();
  }
}

