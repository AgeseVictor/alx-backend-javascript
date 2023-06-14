const mocha = require("mocha");
const sinon = require("sinon");
const { expect } = require("chai");

const utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');


describe("sendPaymentRequestToApi", () => {
  let spy;
  
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  
  afterEach(() => {
    spy.restore();
  });
  it("calls sendPaymentRequestToApi", () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
  it("calls sendPaymentRequestToApi", () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
