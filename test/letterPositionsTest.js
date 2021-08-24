const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () =>  {

  it('should match ', () => {
    assert.deepEqual(letterPositions('Brandon').n, [3,6]);
  });

  it('should match ', () => {
    assert.deepEqual(letterPositions('Janelle').J, [0]);
  });

  it('should match ', () => {
    assert.deepEqual(letterPositions('Graham').a, [2,4]);
  });

  it('should match ', () => {
    assert.deepEqual(letterPositions('Jason').m, undefined);
  });

});