class PairTrade {
    get txtPrice() { return '#FormRow-BUY-price'; }
    get txtQuantity() { return '#FormRow-BUY-quantity'; }
    get txtTotal() { return '#FormRow-BUY-total'; }
    get btnSubmit() { return '#orderForm-button-exchangelimitBuy'; }

    isDisplayed() {
        cy.get(this.txtTotal).should('visible');
    }

    fillPriceAndQuantity(price, quantity) {
        cy
            .get(this.txtPrice).clear().type(price.toString())
            .get(this.txtQuantity).clear().type(quantity.toString());
        return this;
    }

    verifyTotal(total) {
        cy
            .get(this.txtTotal).focus()
            .should('value', total.toString());
        return this;
    }

    submitButtonNotExist() {
        cy.get(this.btnSubmit).should('not.exist');
    }
}

export default new PairTrade();