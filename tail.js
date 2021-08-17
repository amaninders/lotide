const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: ${a} === ${b}` : `🔴 Assertion Failed: ${a} !== ${b}`);
};

const tail = function(array) {
  return (array.length <= 1) ? [] : array.slice(1);
};

// TEST CODE
console.log(tail([5,6,7,5]));
console.log(tail([5]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!