@Crowdar @Cart
Feature: Login and Cart

    Background:
        Given the user is on the login page

    @AddToCart
    Scenario: Add product to the cart
        Given the user logs in as "standard"
        When the user adds a product to the cart
        Then the product should be displayed in the cart

    @RemoveProduct
    Scenario: Remove product from the cart
        Given the user logs in as "standard"
        When the user adds a product to the cart
        And the user removes the product from the cart
        Then the cart should be empty