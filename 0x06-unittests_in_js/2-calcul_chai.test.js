const chai = require("chai");

const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("return the sum of arguments", () => {
    chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1.4, 3.9)).to.equal(5);
    chai.expect(calculateNumber('SUM', 4.4, 4.5)).to.equal(9);
  });
  it("return subtraction of arguments", () => {
    chai.expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 7.9, 3.9)).to.equal(4);
    chai.expect(calculateNumber('SUBTRACT', 5.9, 4.5)).to.equal(1);
  });
  it("return the division of arguments", () => {
    chai.expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    chai.expect(calculateNumber('DIVIDE', 8.4, 3.9)).to.equal(2);
    chai.expect(calculateNumber('DIVIDE', 4.4, 0)).to.equal('ERROR');
  });
  it("throws TypeError", () => {
    chai.expect(() => calculateNumber('SUM', "four")).to.throw(TypeError);
    chai.expect(() => calculateNumber('SUM', 4, "four")).to.throw(TypeError);
  });
  it("casting arguments into numbers", () => {
    chai.expect(calculateNumber('SUM', '1', '3')).to.equal(4);
    chai.expect(calculateNumber('SUM', 1.4, '3.9')).to.equal(5);
    chai.expect(calculateNumber('SUM', '4.4', 4.5)).to.equal(9);
  });
});
describe("Invalid operator type", () => {
  it("Invalid operator type", () => {
    chai.expect(() => calculateNumber('INVALID', 6, 9)).to.throw('Invalid operator type');
  });
});
