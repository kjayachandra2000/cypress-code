class MorePage {
    get lnkFavorites() { return '#home-button-favorites'; }
    get lnkTrade() { return 'div[title=Ethereum]'; }
    get chart() { return '.chartContainer .line'; }
    get scroll() { return '.ReactVirtualized__Grid__innerScrollContainer'; }

    openPairTradingView() {
        cy
            .get(this.lnkFavorites).should('be.visible')
            .get(this.lnkTrade).click({ force: true });
    }
}

export default new MorePage();