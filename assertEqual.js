const assertEqual = function(a,b) {
  console.log((a === b) ? '✅✅✅ Assertion Passed: ' + a + ' === ' + b : '🔴🔴🔴 Assertion Failed: ' + a + ' !== ' + b);
};


// TEST CODE
assertEqual("Lighthouse Labs","Bootcamp");
assertEqual(1,1);