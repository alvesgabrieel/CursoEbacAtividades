/// <reference types="cypress" />

describe("Teste de funcionalidade", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um contato", () => {
    cy.get("Input[type='text']").type("Gabriel Alves");
    cy.get("Input[type='email']").type("gabrielalves@test.com");
    cy.get("Input[type='tel']").type("084991943788");

    cy.get(".adicionar").click();
  });

  it("Deve alterar o contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();

    cy.get("Input[type='text']").click().clear();
    cy.get("Input[type='text']").type("Gian Souza");
    cy.get("Input[type='email']").click().clear();
    cy.get("Input[type='email']").type("gian@ebac.com");
    cy.get("Input[type='tel']").click().clear();
    cy.get("Input[type='tel']").type("011912345679");

    cy.get(".alterar").click();
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      "Gian Souza"
    );
  });

  it("Deve remover o contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
  });
});
