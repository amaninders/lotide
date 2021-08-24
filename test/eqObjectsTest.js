const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects', () =>  {
  it('should return true', () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return true', () => {
    const obj1 = { 1: "1", 2: { first: 'alpha', second: 'beta', third: 'gamma'}};
    const obj2 = { 2: { first: 'alpha', second: 'beta', third: 'gamma'}, 1: "1"};
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return true', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return false', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

});