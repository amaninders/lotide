const assertEqual = function(a,b) {
	
  // uncomment the following loc if you need a visual output for the result
  const success = `✅ Assertion Passed: [${a}] === [${b}]`;
  const failure = `🔴 Assertion Failed: [${a}] !== [${b}]`;
  console.log((a === b) ?  success : failure);

  // uncomment the following line to return an output for assertion
  // return (a === b) ? true : false;
};

module.exports = assertEqual;