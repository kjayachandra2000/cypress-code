import pairTradePage from "../../support/pages/PairTrade.page";

describe('Acceptance Criteria', () => {

  beforeEach('Open Pair Trade Page', () => {
    pairTradePage
      .open();
  });

  it('user should not be able to submit', () => {
    const price = 1.234;
    const quantity = 10;
    var total = (price * quantity).toFixed(8);

    pairTradePage
      .fillPriceAndQuantity(price, quantity)
      .verifyTotal(total)
      .submitButtonNotExist();
  });

  it('should be able to verify stream of information', () => {
    const socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethbtc@kline_1h');
    const startTime = new Date().getTime();
    socket.onopen = function (e) {
      const endTime = ((new Date().getTime() - startTime) / 1000) / 60;
      expect(endTime).to.be.lessThan(1);
    };
    let i = 0;
    socket.onmessage = function (message) {
      expect(message.data).to.be.a('string');
      i = i + 1;
      if (i === 2) {
        socket.close();
        Cypress.runner.stop();
      }
    };
  });
});
