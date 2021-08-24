// ACTUAL FUNCTION
const flatten = array => {

  // initialize the output array
  const output = [];

  const flatChild = (childArray) => {

    // execute for loop to generate the output
    for (const item of childArray) {
      if (Array.isArray(item)) {
        flatChild(item);
      } else {
        output.push(item);
      }
    }
  };

  flatChild(array);

	// return output
  return output;
};

module.exports = flatten;