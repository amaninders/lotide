// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const assertArraysEqual = function(a,b) {
  console.log((eqArrays(a, b)) ? `✅ Assertion Passed: [a] === [b]` : `🔴 Assertion Failed: [a] !== [b]`);
};

// ACTUAL FUNCTION
const takeUntil = function(inputArray, callback) {
  let results = [];
  for (const item of inputArray) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);
