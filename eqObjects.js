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

  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);

  // Otherwise you get back a big fat false!
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  for (const key of keysObject1) {

    // initialize two items from each object with same key
    const firstItem = object1[key];
    const secondItem = object2[key];

    // custom function to check the object type
    const isObject = (obj => Object.prototype.toString.call(obj) === '[object Object]');

    const isArrayItem = Array.isArray(firstItem) && Array.isArray(secondItem);
    const isObjectItem = isObject(firstItem) && isObject(secondItem);

    if (isObjectItem && !eqObjects(firstItem, secondItem)) {
      return false;
    } else if (isArrayItem && !eqArrays(firstItem, secondItem)) {
      return false;
    } else if (!isObjectItem && !isArrayItem && firstItem !== secondItem) {
      return false;
    }
  }

  // Returns true if both objects have identical keys with identical values.
  return true;
  
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // should pass



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // should pass


const ef = { 1: "1", 2: { first: 'alpha', second: 'beta', third: 'gamma'}};
const fg = { 2: { first: 'alpha', second: 'beta', third: 'gamma'}, 1: "1"};
assertEqual(eqObjects(ef, fg), true); //should pass


// More test cases from Compass Activity
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => should pass
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // should fail
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true); // => should fail