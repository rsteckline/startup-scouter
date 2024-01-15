describe("Job Details Page Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/item/38973998.json",
      { fixture: "mock-job-with-text.json" }
    ).as("getJobDetails");
    cy.visit("/job/38973998");
  });

  it("displays the correct job title", () => {
    cy.get(".job-title-content").should(
      "contain",
      "Axle (YC S22) is hiring a senior product engineer"
    );
  });

  it("displays the job details correctly", () => {
    cy.get(".details-content").should(
      "contain",
      "Axle is Plaid for Insurance - a universal API for insurance data."
    );
  });

  it("has a working 'Back' button in the header", () => {
    cy.get(".back-button").click();
    cy.location("pathname").should("eq", "/");
  });
});
