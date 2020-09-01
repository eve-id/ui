describe("Sapper template app", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("has the correct logo", () => {
		cy.contains("h1.logo", "EveID");
	});

	it("navigates to /accounts/signup", () => {
		cy.get("a").contains("Get started").click();
		cy.url().should("include", "/accounts/signup");
	});
});
