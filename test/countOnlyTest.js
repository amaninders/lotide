const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('countOnly', () =>  {
  it('should return {"Jason" : 1}', () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true}), {'Jason' : 1});
  });
	
  it('should return {"Fang" : 2}', () => {
    assert.deepEqual(countOnly(firstNames, { "Fang": true}), {'Fang' : 2});
  });
	
  it('should return {}', () => {
    assert.deepEqual(countOnly(firstNames, { "Jamie": true}), {});
  });
	
});

