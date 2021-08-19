// function to compare the arrays
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

// function to compare two inputs
const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [${a}] === [${b}]` : `🔴 Assertion Failed: [${a}] !== [${b}]`);
};


// TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [1, 3, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [1, 2])); // => true
