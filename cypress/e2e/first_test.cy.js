const teste = "https://www.amazon.com.br/?tag=msndesktopabk-20&ref=pd_sl_7to86bd2ph_e&adgrpid=1141293728081284&hvadid=71331080112049&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=147001&hvtargid=kwd-71331371436168:loc-20&hydadcr=26346_11803856&msclkid=5bfd8417ecf7144efb22e2678cd76ec9";

describe("Teste compra na Amazon", () => {
  it("Deverá fazer um fluxo de compra e desistência de compra na Amazon", () => {  
    //IR PARA A AMAZON
    cy.log('Ir para o site da Amazon.');
    cy.visit(teste);

    //ADICIONAR UM ITEM AO CARRINHO
    cy.log('Adicionar um item ao carrinho.');
    cy.get('#twotabsearchtextbox').type('Biscoito {enter}');
    // cy.get('#nav-search-submit-button').click()
    cy.get('[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
    cy.get('#a-autoid-0-announce').click();
    cy.get('#quantity_0').click();
    cy.get('#add-to-cart-button').click()

    //FAZER MAIS UMA ADIÇÃO AO CARRINHO
    cy.log('Fazer mais uma adição ao carrinho.');
    cy.get('#twotabsearchtextbox').type('Livros {enter}');
    cy.get('[data-asin="6584956245"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click();
    cy.get('#a-autoid-4-announce').click();
    cy.get('#quantity_3').click();
    cy.get('#add-to-cart-button').click();

    //IR PARA O CARRINHO
    cy.log('Ir ao carrinho.');
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();


    //MUDAR A QUANTIDADE DE UM DOS ITENS
    cy.log('Mudar a quantia de um dos itens.');
    cy.get('#a-autoid-0-announce').click();
    cy.get('#quantity_1').click();

    //FECHAR PEDIDO
    cy.log('Fechar Pedido(Não serão feitos os processos de login, este passo é apenas figurativo.)');
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
  })
});