afterEach(function () {
  if (this.currentTest.state === "failed") {
    cy.screenshot(`FAILED-${this.currentTest.title}`);
  }
});