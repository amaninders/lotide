const eqArrays = require('./eqArrays');

// function to compare two inputs
const assertArraysEqual = function(a,b) {

  const success = `✅ Assertion Passed: [${a}] === [${b}]`;
  const failure = `🔴 Assertion Failed: [${a}] !== [${b}]`;
  console.log((eqArrays(a, b) ? success  : failure));

  // uncomment the following to return an output true/false
  return (eqArrays(a, b)) ? true : false;

};

module.exports = assertArraysEqual;
