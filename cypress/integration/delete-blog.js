it("when delete button is clicked, item is removed", () => {
  cy.visit("http://localhost:3000/view-blogs");
  cy.get("#93023pig > form > button").click();
  cy.get("ul > #93023pig").should("not.exist");
});

//it("when delete button is clicked, ID is removed")

it("when delete button is clicked, only one item is removed", () => {
  const expeted = 1;
  cy.visit("http://localhost:3000/view-blogs");
  cy.get("#90923nice > form > button").click();
  cy.get("ul li").its("length").should("be.eq", expeted);
});

// it("when delete button is clicked, last post is removed", () => {
//   cy.visit("http://localhost:3000/view-blogs");
//   cy.get("#90923nice > form > button").click();
//   cy.get("ul li").should("not.exist");
// });
