import Currency from './3-currency'; // eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(nCurrency) {
    this._currency = nCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
