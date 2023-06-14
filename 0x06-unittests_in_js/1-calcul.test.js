const assert = require("assert");
const mocha = require("mocha");

const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("return the sum of arguments", () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.9), 5);
    assert.strictEqual(calculateNumber('SUM', 4.4, 4.5), 9);
  });
  it("return subtraction of arguments", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 7.9, 3.9), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.9, 4.5), 1);
  });
  it("return the division of arguments", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 8.4, 3.9), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0), 'ERROR');
  });
  it("throws TypeError", () => {
    assert.throws(() => calculateNumber('SUM', "four"), {
      name: 'TypeError',
      message: 'arguments must be numbers'
  });
    assert.throws(() => calculateNumber('SUM', 4, "four"), {
      name: 'TypeError',
      message: 'arguments must be numbers'
    });
  });
  it("casting arguments into numbers", () => {
    assert.strictEqual(calculateNumber('SUM', '1', '3'), 4);
    assert.strictEqual(calculateNumber('SUM', 1.4, '3.9'), 5);
    assert.strictEqual(calculateNumber('SUM', '4.4', 4.5), 9);
  });
});  
describe("Invalid operator type", () => {
  it("Invalid operator type", () => {
    assert.throws(() => calculateNumber('INVALID', 6, 9), {
      message: 'Invalid operator type'
   });
  });  
});
