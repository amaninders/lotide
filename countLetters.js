// TEST/ASSERTION FUNCTIONS
const assertEqual = function(a,b) {
  console.log((a === b) ? `✅ Assertion Passed: ${a} === ${b}` : `🔴 Assertion Failed: ${a} !== ${b}`);
};

// ACTUAL FUNCTION

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

// TEST CODE
assertEqual(countLetters('Jason')["M"],undefined); // should be undefined
assertEqual(countLetters('Brandon')["n"],2); // should be true
assertEqual(countLetters('Janelle')["J"],1); // should be true
assertEqual(countLetters('Graham')["a"],2); // should be true