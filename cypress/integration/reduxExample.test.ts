describe("My first test", () => {
  beforeEach(() => {
    // Intercepts server requests and replace with stubbed response
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: "https://jsonplaceholder.typicode.com/todos",
      },
      [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ] // stubbed response
    ).as("getTodos");
  });

  it("navigates to redux example component", () => {
    cy.visit("/");

    cy.contains("Redux Toolkit").click();

    cy.contains("Increment");
    cy.contains("delectus");
  });

  it("can toggle todos completion status", () => {
    cy.visit("/#/redux");

    cy.get("[aria-label='complete todo']").should("have.length", 2);
    cy.get("[aria-label='undo todo']").should("have.length", 0);

    cy.get("[aria-label='complete todo']").first().click();

    cy.get("[aria-label='complete todo']").should("have.length", 1);
    cy.get("[aria-label='undo todo']").should("have.length", 1);

    cy.get("[aria-label='undo todo']").first().click();
    cy.get("[aria-label='complete todo']").should("have.length", 2);
    cy.get("[aria-label='undo todo']").should("have.length", 0);
  });

  it("can increment and decrement counter", () => {
    cy.visit("/#/redux");

    cy.get("h3 + p").contains("0");

    cy.contains("Increment").click();
    cy.get("h3 + p").contains("1");

    cy.contains("Increment").click();
    cy.get("h3 + p").contains("2");

    cy.contains("Decrement").click();
    cy.get("h3 + p").contains("1");

    cy.contains("Decrement").click();
    cy.get("h3 + p").contains("0");

    cy.contains("Decrement").click();
    cy.get("h3 + p").contains("-1");
  });
});
