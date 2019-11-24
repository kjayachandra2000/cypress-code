import homePage from "../../support/pages/Home.page";
import pairTradePage from "../../support/pages/PairTrade.page";
import morePage from "../../support/pages/More.page";

describe('Acceptance Criteria', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('user should not be able to submit ', () => {
    const price = 1.234;
    const quantity = 10;
    var total = (price * quantity).toFixed(8);
    cy.visit('/trade/ETH_BTC');

    pairTradePage
      .fillPriceAndQuantity(price, quantity)
      .verifyTotal(total)
      .submitButtonNotExist();
  });

  it('user should be able to navigate to Pair trading view', () => {
    homePage
      .openMarkets();
    morePage
      .openPairTradingView();
    pairTradePage
      .isDisplayed();
  });
});
