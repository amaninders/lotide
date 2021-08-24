const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire",
  'thriller':  "Dark",
  'sitcom':  "The Office"
};

describe('#findKeyByValue', () =>  {
  it('outcome should be drama', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
	
  it('outcome should be drama', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
	
  it('outcome should be drama', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "sitcom");
  });
	
  it('outcome should be drama', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "thriller");
  });
	
});