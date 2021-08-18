// TEST/ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {

  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(actual, expected) {
  console.log((actual === expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// ACTUAL FUNCTION
const middle = function(array) {

  let output = [];
  const length = array.length;
  const isEven = (array.length % 2 === 0);
  const startIndex = Math.floor((length-1)/2);
  const endIndex = startIndex + (isEven ? 2 : 1);
  
  return (length > 2) ? array.slice(startIndex, endIndex) : [] ;

}

// TEST CODE
assertArraysEqual(eqArrays((middle([1])),[]),true); // should be true
assertArraysEqual(eqArrays((middle([1])),[1]),false); // should be false
assertArraysEqual(eqArrays((middle([1,2])),[]),true); // should be true
assertArraysEqual(eqArrays((middle([1,2])),[1,2]),false); // should be false
assertArraysEqual(eqArrays((middle([1,2,3])),[2]),true); // should be true
assertArraysEqual(eqArrays((middle([1,2,3,4])),[2,3]),true); // should be true
assertArraysEqual(eqArrays((middle([1,2,3,4])),[2,3]),true); // should be true
assertArraysEqual(eqArrays((middle([1,2,3,4,5,6])),[3,4]),true); // should be true
assertArraysEqual(eqArrays((middle([1,2,3,4,5,6])),[2,3]),false); // should be false