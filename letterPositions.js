// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [${a}] === [${b}]` : `🔴 Assertion Failed: [${a}] !== [${b}]`);
};

// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  const results = {};
  Array.from(sentence).forEach((element, index) => {
    (results[element]) ? results[element].push(index) : results[element] = [index];
  });
  return results;
};

console.log('results: ',letterPositions('Brandon').B);

// TEST CODE
assertArraysEqual(letterPositions('Brandon').n, [3,6]); // should be true
assertArraysEqual(letterPositions('Janelle').J, [0]); // should be true
assertArraysEqual(letterPositions('Graham').a, [2,4]); // should be true
assertArraysEqual(letterPositions('Jason').s, [2]); // should be true