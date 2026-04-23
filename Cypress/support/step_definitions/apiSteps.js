import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import service from "../../services/mercadoLibreService";

let response;

When("the user requests Mercado Libre departments", () => {
  service.getDepartments().then((res) => {
    response = res;
  });
});

Then("the response should contain departments", () => {
  expect(response.status).to.eq(200);
  expect(response.body).to.exist;

  expect(response.body).to.have.property("departments");
});