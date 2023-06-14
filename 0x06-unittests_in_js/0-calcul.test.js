const assert = require("assert");
const mocha = require("mocha");

const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("return the sum of arguments", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.4, 3.9), 5);
    assert.strictEqual(calculateNumber(4.4, 4.5), 9);
  });
  it("throws TypeError", () => {
    assert.throws(() => calculateNumber("four"), {
      name: 'TypeError',
      message: 'arguments must be numbers'
  });
    assert.throws(() => calculateNumber(4, "four"), {
      name: 'TypeError',
      message: 'arguments must be numbers'
    });
  });
  it("casting arguments into numbers", () => {
    assert.strictEqual(calculateNumber('1', '3'), 4);
    assert.strictEqual(calculateNumber(1.4, '3.9'), 5);
    assert.strictEqual(calculateNumber('4.4', 4.5), 9);
  });
});
