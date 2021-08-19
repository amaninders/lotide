// TEST/ASSERTION FUNCTIONS
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: a === b` : `🔴 Assertion Failed: a !== b`);
};

// ACTUAL FUNCTION
const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire",
  'thriller':  "Dark",
  'sitcom':  "The Office"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "sitcom");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "thriller");