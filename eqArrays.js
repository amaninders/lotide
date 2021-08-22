// function to compare two inputs
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: ${a} === ${b}` : `🔴 Assertion Failed: ${a} !== ${b}`);
};

// function to compare the arrays
const eqArrays = (array1, array2) => {

  let output;

  // compare length of arrays then do element match
  if (array1.length !== array2.length) {
    return false;
  }

  output = array1.every((element,index) => {

    let firstItem = element;
    let secondItem = array2[index];

    const isArrayItem = Array.isArray(firstItem) && Array.isArray(secondItem);

    if (isArrayItem && !eqArrays(firstItem, secondItem)) {
      return false;
    } else if (!isArrayItem && firstItem !== secondItem) {
      return false;
    }

    return true;

  });

  return output;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => should PASS