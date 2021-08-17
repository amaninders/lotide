// function to compare two inputs
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: ${a} === ${b}` : `🔴 Assertion Failed: ${a} !== ${b}`);
};

// function to compare the arrays
const assertArraysEqual = (arr1, arr2) => {

  // compare length of arrays then do element match with anonymous function
  console.log(`Original array is intact:`,(arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false);
};

// function to remove the array items
const without = (source, itemsToRemove) => {
  
  // initialize empty array to store the output
  let output = [];

  // loop through array elements and push to output if found in itemsToRemove
  for (const element of source) {
    if(itemsToRemove.indexOf(element) < 0 ) {
      output.push(element);
    };
  }
  console.log(`New Array:`, output);
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words,["hello", "world", "lighthouse"]);