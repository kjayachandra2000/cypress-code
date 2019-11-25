import homePage from "../../support/pages/Home.page";
import morePage from "../../support/pages/More.page";
import pairTradePage from "../../support/pages/PairTrade.page";

describe('Acceptance Criteria', () => {
  it('user should be able to navigate to Pair trading view', () => {
    homePage
      .open()
      .openMarkets();
    morePage
      .openPairTradingView();
    pairTradePage
      .isDisplayed();
  });  
});
