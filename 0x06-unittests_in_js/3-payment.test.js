const mocha = require("mocha");
const sinon = require("sinon");
const { expect, assert } = require("chai");

const utils = require('./utils');
const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require('./3-payment');
const { spy } = require("sinon");


describe("sendPaymentRequestToApi", () => {
  it("calls calculateNumber", () => {
    const calNumSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    const apiReqRes = sendPaymentRequestToApi(100, 20);
    expect(calNumSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiReqRes);
    calNumSpy.restore();
    consoleSpy.restore();
  });
});
