
class HomePage {
    get lnkMarket() { return 'header > a:nth-child(3)'; }

    openMarkets() {
        cy
            .get(this.lnkMarket).focus().click();
    }
}

export default new HomePage();