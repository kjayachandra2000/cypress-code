
describe('Acceptance Criteria', () => {
  it('should be able to verify stream of information', () => {
    cy.server();

    //This is the post call we are interested in capturing
    cy.route('GET', '**stream**', '101').as('kjc');


    cy.visit("/trade/ETH_BTC");

    cy.get('.sc-1t2bpae-8.fYUWfp .rect2:nth-child(1)').should('not.visible');
    cy.get('.ReactVirtualized__Grid__innerScrollContainer').should('be.visible');

    cy.wait('@kjc');
    cy.get('@kjc').then(function (xhr) {
      console.log('kjc  ' + xhr.status);
      expect(xhr.status).to.eq(101);
    });
  });
});
