it("has a blog title input", () => {
    cy.visit("http://localhost:3000/add-blog");
    cy.get("#blog-form").find("input[name='title']").type("Blog title");
    cy.get("#blog-form").submit();
  });

  it("has a blog content input", () => {
    cy.visit("http://localhost:3000/add-blog");
    cy.get("#blog-form").find("input[name='content']").type("Blog content");
    cy.get("#blog-form").submit();
  });

  it("has a cover photo input", () => {
    cy.visit("http://localhost:3000/add-blog");
    cy.get("#blog-form").find("input[name='photo']").type("Blog title");
    cy.get("#blog-form").submit();
  });