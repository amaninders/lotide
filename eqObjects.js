// TEST/ASSERTION FUNCTIONS
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: a === b` : `🔴 Assertion Failed: a !== b`);
};

const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};


// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {

  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);

  // Otherwise you get back a big fat false!
  if (array1.length !== array2.length) {
    return false;
  }

  for (const child of array1) {
    const arrayItems = (Array.isArray(object1[child]) && Array.isArray(object2[child]));

    if (arrayItems) {
      eqArrays(object1[child], object2[child]);
    } else if (object1[child] !== object2[child]) {
      return false;
    }
  }

  // Returns true if both objects have identical keys with identical values.
  return true;
  
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true); // should pass
assertEqual(eqObjects(ab, abc), false); // should fail


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true); // should pass
assertEqual(eqObjects(cd, cd2), false); // should fail

const ef = { 1: "1", 2: { first: 'alpha', second: 'beta', third: 'gamma'}};
const eg = { 1: "1", 2: ['alpha', 'beta', 'gamma']};
const fg = { 2: { first: 'alpha', second: 'beta', third: 'gamma'}, 1: "1"};
assertEqual(eqObjects(ef, eg), false); // should fail
assertEqual(eqObjects(ef, fg), true); //should pass
