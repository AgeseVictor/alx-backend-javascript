const mocha = require("mocha");
const sinon = require("sinon");
const { expect } = require("chai");

const utils = require('./utils');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe("getPaymentTokenFromAPI", () => {
  it("calls getPaymentTokenFromAPI", (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
