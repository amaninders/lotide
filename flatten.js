// function to compare two inputs
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: ${a} === ${b}` : `🔴 Assertion Failed: ${a} !== ${b}`);
};

// function to compare the arrays
const eqArrays = (arr1, arr2) => {

  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

// declare the function
const flatten = array => {

  // initialize the output array
  let output = [];

  // execute for loop to generate the output
  for (let item of array) {
    Array.isArray(item) ? output = [...output,...item] : output.push(item);
  }
  return output;
}

// TEST CODE
console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]));