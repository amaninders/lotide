// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [${a}] === [${b}]` : `🔴 Assertion Failed: [${a}] !== [${b}]`);
};

// ACTUAL FUNCTION
const flatten = array => {

  // initialize the output array
  let output = [];

  // execute for loop to generate the output
  for (let item of array) {
    Array.isArray(item) ? output = [...output,...item] : output.push(item);
  }
  return output;
};

// TEST CODE
const testArray = [1, 2, [3, 4], 5, [6]];
const expectedArray =  [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(testArray), expectedArray); // should pass the assertion