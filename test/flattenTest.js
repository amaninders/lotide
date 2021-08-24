const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should match [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should match [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([[[1,[3,5]]]]), [1, 3, 5]);
  });

});