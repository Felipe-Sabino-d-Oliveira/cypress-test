const nomes = [
  "hans peter schmidt",
  "anna sophie müller",
  "johann wolfgang schneider",
  "maria luisa schulz",
  "thomas andreas hoffmann",
  "sofia maria wagner",
  "paul heinrich becker",
  "emma charlotte koch",
  "lukas matthias fischer",
  "lea sophia schwarz",
  "jonas michael huber",
  "clara anna krause",
  "max emil bauer",
  "lara marie schmidt",
  "simon lukas hofmann",
  "helena lena mayer",
  "felix leon schneider",
  "julia anna wolf",
  "benjamin martin schwarz",
  "mia emilia klein]",
];

const emails = [];

nomes.forEach((element) => {
  const nomeCompleto = element;
  const [nome, ...sobrenome] = nomeCompleto.split(" ");
  const email =
    nome.replace(/\s+/g, ".") +
    "." +
    sobrenome.join(".") +
    Math.round(Math.random() * 100);
  emails[nomeCompleto] = email;
});

let indice = Math.floor(Math.random()*100/5-1)
console.log(indice)
console.log(emails);

const link =
  "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dlogin%2Bgoogle%26rlz%3D1C1GCEU_pt-BRBR1098BR1098%26oq%3Dlogin%26gs_lcrp%3DEgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIRCAEQRRg5GEMYsQMYgAQYigUyBggCEEUYQDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMjc5ajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8%26safe%3Dactive%26ssui%3Don&ec=futura_gmv_dt_si_72586115_e&hl=pt-BR&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S521048960%3A1718392446246089&ddm=0";
describe("template spec", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    if (
      err.message.includes(
        "ResizeObserver loop completed with undelivered notifications"
      )
    ) {
      return false;
    }
    return true;
  });
  it("O teste foi bem executado", () => {
    // Ignorar o erro "ResizeObserver loop completed with undelivered notifications"
    
    cy.visit(link);
    cy.contains("Criar conta").click();

    // verificar se existe o elemento
    cy.get("body").then(($body) => {
      // Verifique se algum elemento com a classe '.special-item' está presente no DOM
      if ($body.find(".gNVsKb ").length > 0) {
        cy.log("Porra");
        // Se a classe estiver presente, clique no primeiro botão da lista
        cy.contains("Para uso pessoal").first().click();
      } else {
        // A classe não está presente, registre um log
        cy.log("Elemento '.special-item' não encontrado, ação não executada.");
      }
    });

    cy.get('input[name="firstName"]')
      .should("be.visible")
      .should("be.enabled")
      .type(nomes[indice]);

    /* cy.get('input[name="lastName"]')
      .should("be.visible")
      .should("be.enabled")
      .type("Sicrano"); */
    cy.contains("Avançar").click();

    cy.get(".whsOnd").first().type("12");

    //selecionar mês
    cy.get(".gNnnTd").first().should("have.value", "");
    cy.get(".gNnnTd").first().select("1").should("have.value", "1");

    cy.get("#year").first().type("2000");
    //selecionar gênero
    cy.get("#gender").first().should("have.value", "");
    cy.get("#gender").first().select("3").should("have.value", "3");

    cy.contains("Avançar").click();

    // Verifica se o elemento contém o texto "Crie seu próprio endereço do Gmail"
    cy.contains("Crie seu próprio endereço do Gmail").then(($element) => {
      if ($element.length > 0) {
        cy.log('Elemento "Crie seu próprio endereço do Gmail" encontrado');
        $element.click();
        cy.get('input[name="Username"]').type(emails[nomeCompleto]);
      } else {
        cy.log(
          "Elemento 'Crie seu próprio endereço do Gmail' não encontrado, procurando pelo campo 'Nome de usuário'"
        );
        cy.get('input[name="Username"]').type(emails[nomeCompleto]);
      }
    });
  });
});
