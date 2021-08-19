// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [${a}] === [${b}]` : `🔴 Assertion Failed: [${a}] !== [${b}]`);
};

// ACTUAL FUNCTION
const without = (source, itemsToRemove) => {
  
  // initialize empty array to store the output
  let output = [];

  // loop through array elements and push to output if found in itemsToRemove
  for (const element of source) {
    if (itemsToRemove.indexOf(element) < 0) {
      output.push(element);
    }
  }
  return output;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words,["hello", "world", "lighthouse"]); //verify actual array
assertArraysEqual(without(words,["hello", "world"]),["lighthouse"]); // should be true