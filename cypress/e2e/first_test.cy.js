describe("template spec", () => {
  it("O teste foi bem executado", () => {
    cy.visit("www.google.com");
    cy.contains("Fazer login").click();
    cy.contains("Criar conta").click();

    /* 
    
    cy.get('input[name="firstName"]').type("Fulano");
    cy.get('input[name="lastName"]').type("Sicrano");
    cy.contains("Avançar").click(); */
  });
});
