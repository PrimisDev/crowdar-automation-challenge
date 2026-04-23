class CartPage {
  elements = {
    cartItem: () => cy.get('.cart_item'),
    removeButton: () => cy.get('.cart_button'),
    emptyCartMessage: () => cy.get('.cart_item')
  };

  removeProduct() {
    this.elements.removeButton().click();
  }

  verifyProductInCart() {
    this.elements.cartItem().should('have.length', 1);
  }

  verifyCartIsEmpty() {
    this.elements.cartItem().should('have.length', 0);
  }
}

export default new CartPage();