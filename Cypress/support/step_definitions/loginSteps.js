import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import users from "../data/usersLibrary";

Given("the user is on the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

Given("the user logs in as {string}", (userType) => {
  const user = users[userType];

  expect(user, `User '${userType}' not found`).to.exist;

  loginPage.login(user.username, user.password);
});

Then("the user should be on the home page", () => {
  loginPage.verifyHomePage();
});
