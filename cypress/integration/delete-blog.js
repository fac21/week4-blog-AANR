it("when delete button is clicked, item is removed", () => {
    cy.visit("http://localhost:3000/view-blogs");
    cy.get("ul > #93023pig");
    cy.get("#93023pig > form > button").click();
    cy.get("ul > #93023pig");
} )

//it("when delete button is clicked, ID is removed")