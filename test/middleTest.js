const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 11 for [8, 9, 10, 11, 12, 13, 14]", () => {
    assert.deepEqual(middle([8, 9, 10, 11, 12, 13, 14]), [11] )
  });

  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4] )
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), [] )
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [] )
  });

  it(" returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [] )
  });

  it("returns ['c', 'd'] for ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c', 'd'] )
  });

});
