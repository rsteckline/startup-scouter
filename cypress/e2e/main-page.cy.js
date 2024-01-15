describe("Main Page Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/jobstories.json",
      { statusCode: 200, fixture: "mock-job-ids.json" }
    ).as("xod");

    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/item/38984514.json",
      { statusCode: 200, fixture: "mock-job-details-1.json" }
    ).as("getFirstJobDetails");

    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/item/38981851.json",
      { statusCode: 200, fixture: "mock-job-details-2.json" }
    ).as("getLastJobDetails");

    cy.visit("/");
  });

  it("should be able to see the title of the page in the header", () => {
    cy.get("header h1").contains("Startup Scouter");
  });

  it("filters job postings based on search input", () => {
    cy.get('input[name="searchQuery"]').type("mobile");
    cy.get(".job-posting-container").should("have.length", 1);
    cy.get(".job-posting-container").first().contains("mobile");
  });
  
  it("displays the first and last job posting from the list", () => {
    cy.wait('@getJobIds');
    cy.wait('@getFirstJobDetails');
    cy.wait('@getLastJobDetails');
    cy.get(".job-posting-container").should("have.length", 2);
    cy.get(".job-posting-container").first().contains("Spine AI (YC S23) Is Hiring");
    cy.get(".job-posting-container").last().contains("Emerge (YC W21) is hiring an Android expert to help build the future of mobile");
  });

});