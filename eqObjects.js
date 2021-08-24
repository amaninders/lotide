const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;