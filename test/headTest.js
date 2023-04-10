const assert = require('chai').assert;
const head = require('../head');
// const assertEqual = require('../assertEqual'); //no longer required because we are using the chai assertion libarary.

describe ("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it ("returns 20 for [20]", () => {
    assert.strictEqual(head([20]), 20);
  });

  it(`returns hello for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it ("returns empty array for empty array", () => {
    assert.strictEqual(head([]), );
  });


});

