const mocha = require("mocha");
const sinon = require("sinon");
const { expect, assert } = require("chai");

const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { spy } = require("sinon");


describe("sendPaymentRequestToApi", () => {
  it("calls calculateNumber", () => {
    const stub = sinon.stub(utils, 'calculateNumber');
    stub.returns(100);
    const spy = sinon.spy(console, 'log');
    const apiReqRes = sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(spy.calledWithExactly('The total is: 100')).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiReqRes);
    stub.restore();
    spy.restore();
  });
});
