it("can navigate pages", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Add a post").click();
    cy.url().should("include", "/add-blog");
    cy.visit("http://localhost:3000");
    cy.contains("See post").click();
    cy.url().should("include", "/view-blogs");
  });

it("has the title 'Porky Pies'", () => {
    cy.visit("http://localhost:3000")
    cy.title().should("eq","Porky Pies")
});

