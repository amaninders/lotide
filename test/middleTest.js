const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('it should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1]),[]); // should be true
  });
	
  it('it should return [] for [1, 2]', () => {
    assert.deepEqual(middle([1,2]),[]); // should be true
  });
	
  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]),[2]); // should be true
  });
	
  it('should return [2,3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]); // should be true
  });
	
  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]); // should be true
  });
});
