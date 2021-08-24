
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should return [] for ["Yo"]', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });

  it('should return ["B", "C"] for ["A", "B", "C"]', () => {
    assert.deepEqual(tail(["A", "B", "C"]), ["B", "C"]);
  });

});