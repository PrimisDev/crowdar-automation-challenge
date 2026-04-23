import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../../pages/inventoryPage";
import cartPage from "../../pages/cartPage";

When("the user adds a product to the cart", () => {
  inventoryPage.addFirstProductToCart();
  inventoryPage.verifyProductAdded();
  inventoryPage.goToCart();
});

Then("the product should be displayed in the cart", () => {
  cartPage.verifyProductInCart();
});

When("the user removes the product from the cart", () => {
  cartPage.removeProduct();
});

Then("the cart should be empty", () => {
  cartPage.verifyCartIsEmpty();
});