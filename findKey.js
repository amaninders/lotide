// TEST/ASSERTION FUNCTIONS
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: a === b` : `🔴 Assertion Failed: a !== b`);
};

// ACTUAL FUNCTION
const findKey = function(inputObject, callback) {
  for (const key in inputObject) {
    if (Object.hasOwnProperty.call(inputObject, key)) {
      if (callback(inputObject[key])) {
        return key;
      }
    }
  }
};

// TEST CODE

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // should pass


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'Akaleri'); // should pass

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined); // should pass