describe('Acceptance Criteria', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('user should not be able to submit ', () => {
    const price = 1.234;
    const quantity = 10;
    var total = (price * quantity).toFixed(8);
    cy.visit('/trade/ETH_BTC');
    cy.get('#FormRow-BUY-price').clear().type(price.toString());
    cy.get('#FormRow-BUY-quantity').clear().type(quantity.toString());
    cy.get('#FormRow-BUY-total').focus().should('value', total.toString());
    cy.get('#orderForm-button-exchangelimitBuy').should('not.exist');
  });

  it('user should be able to navigate to Pair trading view', () => {
    cy.get('header > a:nth-child(3)').focus().click();
    cy.get('#home-button-favorites').should('be.visible');
    cy.get("a[href$='trade/ETH_BTC']").click();
    cy.get('.chartContainer .line').should('be.visible');
    cy.get('.ReactVirtualized__Grid__innerScrollContainer').should('be.visible');
    cy.get('label[for=FormRow-BUY-price]').should('be.visible');
  });
});
