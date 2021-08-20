// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  // compare length of arrays then do element match with anonymous function
  return (arr1.length === arr2.length) ? arr1.every((element,index) => element === arr2[index]) : false;
};

const eqObjects = function(obj1, obj2) {
  
  let array1 = Object.keys(obj1);
  let array2 = Object.keys(obj2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const item of array1) {
    let isArrayItem = (Array.isArray(obj1[item]) && Array.isArray(obj2[item]));
    if ((!isArrayItem && (obj1[item] !== obj2[item]))
    || (isArrayItem && !eqArrays(obj1[item], obj2[item]))) {
      return false;
    }
  }
  return true;
};

// ACTUAL FUNCTION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  console.log((eqObjects(object1, object2)) ? `✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(ab, ba));
console.log(assertObjectsEqual(ab, abc));
console.log(assertObjectsEqual(cd, dc));
console.log(assertObjectsEqual(cd, cd2));
