const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () =>  {
  it('should be undefined', () => {
    assert.strictEqual(countLetters('Jason').m, undefined);
  });
	
  it('should be 2', () => {
    assert.strictEqual(countLetters('Brandon').n, 2);
  });
	
  it('should be 1', () => {
    assert.strictEqual(countLetters('Janelle').J, 1);
  });
	
  it('should be 2', () => {
    assert.strictEqual(countLetters('Graham').a, 2);
  });
});

