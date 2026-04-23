class InventoryPage {
  elements = {
    firstAddToCartButton: () => cy.get('.inventory_item').first().find('button'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartButton: () => cy.get('.shopping_cart_link')
  };

  addFirstProductToCart() {
    this.elements.firstAddToCartButton().click();
  }

  goToCart() {
    this.elements.cartButton().click();
  }

  verifyProductAdded() {
    this.elements.cartBadge().should('be.visible');
    this.elements.cartBadge().should('contain', '1');
  }
}

export default new InventoryPage();