const teste =
  "https://www.amazon.com.br/?tag=msndesktopabk-20&ref=pd_sl_7to86bd2ph_e&adgrpid=1141293728081284&hvadid=71331080112049&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=147001&hvtargid=kwd-71331371436168:loc-20&hydadcr=26346_11803856&msclkid=5bfd8417ecf7144efb22e2678cd76ec9";

describe("Teste compra na Amazon", () => {
  it("Adicionar um item ao carrinho.", () => {
    cy.visit(teste);
    cy.get("#twotabsearchtextbox").type("Biscoito {enter}");
    // cy.get('#nav-search-submit-button').click()
    cy.get(
      '[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus'
    ).click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#quantity_0").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#sw-gtc > .a-button-inner > .a-button-text").click();
}),
  it("Fazer mais uma adição ao carrinho.", () => {
    cy.visit(teste);
    cy.get("#twotabsearchtextbox").type("Biscoito {enter}");
    // cy.get('#nav-search-submit-button').click()
    cy.get(
      '[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus'
    ).click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#quantity_0").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#twotabsearchtextbox").type("Livros {enter}");
    cy.get(
      '[data-asin="6584956245"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image'
    ).click();
    cy.get("#a-autoid-4-announce").click();
    cy.get("#quantity_3").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#sw-gtc > .a-button-inner > .a-button-text").click();
  }),
  it("Mudar a quantia de um dos itens.", () => {
    cy.visit(teste);
    cy.get("#twotabsearchtextbox").type("Biscoito {enter}");
    // cy.get('#nav-search-submit-button').click()
    cy.get(
      '[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus'
    ).click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#quantity_0").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#twotabsearchtextbox").type("Livros {enter}");
    cy.get(
      '[data-asin="6584956245"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image'
    ).click();
    cy.get("#a-autoid-4-announce").click();
    cy.get("#quantity_3").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#sw-gtc > .a-button-inner > .a-button-text").click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#quantity_1").click();
  }),
  it("Fechar Pedido(Não serão feitos os processos de login, este passo é apenas figurativo.)", () => {
    cy.visit(teste);
    cy.get("#twotabsearchtextbox").type("Biscoito {enter}");
    // cy.get('#nav-search-submit-button').click()
    cy.get(
      '[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus'
    ).click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#quantity_0").click();
    cy.get("#add-to-cart-button").click();
    cy.get("#sw-gtc > .a-button-inner > .a-button-text").click();
    cy.get(
      "#sc-buy-box-ptc-button > .a-button-inner > .a-button-input"
    ).click();
  });
});
