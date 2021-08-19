// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [${a}] === [${b}]` : `🔴 Assertion Failed: [${a}] !== [${b}]`);
};

// ACTUAL FUNCTION
const middle = function(array) {

  const length = array.length;
  const isEven = (array.length % 2 === 0);
  const startIndex = Math.floor((length - 1) / 2);
  const endIndex = startIndex + (isEven ? 2 : 1);
  
  return (length > 2) ? array.slice(startIndex, endIndex) : [];

};

// TEST CODE
assertArraysEqual(middle([1]),[]); // should be true
assertArraysEqual(middle([1,2]),[]); // should be true
assertArraysEqual(middle([1,2,3]),[2]); // should be true
assertArraysEqual(middle([1,2,3,4]),[2,3]); // should be true
assertArraysEqual(middle([1,2,3,4]),[2,3]); // should be true
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]); // should be true
