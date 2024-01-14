describe("Error handling", () => {
  it("should show an appropriate error if a server error occurs on job stories fetch", () => {
    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/jobstories.json",
      {
        statusCode: 500,
      }
    );
    cy.visit("/");
    cy.get(".error-message").should("contain", "Please try again later.");
  });

  it("should show an appropriate error if a client error occurs on job details fetch", () => {
    cy.intercept("GET", "https://hacker-news.firebaseio.com/v0/item/1.json", {
      statusCode: 404,
    });
    cy.visit("/job/1");
    cy.get(".error-message").should("contain", "Network error occurred");
  });

  it("should show an appropriate error if the page doesn't exist", () => {
    cy.visit("/fakepath");
    cy.get(".error-message").should(
      "contain",
      "Sorry, the page you are looking for does not exist."
    );
  });
});
