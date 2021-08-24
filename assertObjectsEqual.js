const inspect = require('util').inspect;
const eqObjects = require('./eqObjects');

// ACTUAL FUNCTION
const assertObjectsEqual = function(object1, object2) {

  const success = `✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  const failure = `🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  
  console.log((eqObjects(object1, object2)) ? success : failure);

};

module.exports = assertObjectsEqual;