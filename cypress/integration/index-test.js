it("can navigate pages", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Add a post").click();
    cy.url().should("include", "/add-post");
    cy.visit("http://localhost:3000");
    cy.contains("See post").click();
    cy.url().should("include", "/see-posts");
  });

it("has the title 'Porky Pies'", () => {
    cy.visit("http://localhost:3000")
    cy.title().should("eq","Porky Pies")
});

