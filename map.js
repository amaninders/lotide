// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [a] === [b]` : `🔴 Assertion Failed: [a] !== [b]`);
};

// ACTUAL FUNCTION
const map = function(array, callback) {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])); // => true
console.log(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3])); // => true
console.log(assertArraysEqual(map(words, word => word +=  100), [ 'ground100', 'control100', 'to100', 'major100', 'tom100' ])); // => true
