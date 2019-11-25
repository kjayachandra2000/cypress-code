class MorePage {
    get lnkFavorites() { return '#home-button-favorites'; }
    get lnkTrade() { return 'div[title=Ethereum]'; }
    
    openPairTradingView() {
        cy
            .get(this.lnkFavorites).should('be.visible')
            .get(this.lnkTrade).click({ force: true });
    }
}

export default new MorePage();