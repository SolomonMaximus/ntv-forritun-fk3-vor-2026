describe("Team Task Hub", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("creates a project, adds a task, and marks the task complete", () => {
    cy.contains("button", /add project/i).click();

    cy.findByRole("dialog").within(() => {
      cy.findByLabelText(/project name/i).type("Cypress Project");
      cy.findByLabelText(/description/i).type("Project created by an e2e test");
      cy.contains("button", /^add project$/i).click();
    });

    cy.contains("Cypress Project").click();

    cy.contains("button", /add task/i).click();

    cy.findByRole("dialog").within(() => {
      cy.findByLabelText(/task title/i).type("Write Cypress test");
      cy.findByLabelText(/description/i).type(
        "Check the main project task flow",
      );
      cy.contains("button", /^add task$/i).click();
    });

    cy.contains("Write Cypress test").should("be.visible");
    cy.contains("Check the main project task flow").should("be.visible");

    cy.findByRole("checkbox").click();
    cy.findByRole("checkbox").should("have.attr", "aria-checked", "true");
  });
});
