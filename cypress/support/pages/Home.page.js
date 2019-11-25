
class HomePage {
    get lnkMarket() { return 'header > a:nth-child(3)'; }

    open() {
        cy
            .visit('');
        return this;
    }
    openMarkets() {
        cy
            .get(this.lnkMarket).focus().click();
    }
}

export default new HomePage();