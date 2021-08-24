// function to compare the arrays
const eqArrays = (array1, array2) => {

  let output;

  // compare length of arrays then do element match
  if (array1.length !== array2.length) {
    return false;
  }

  output = array1.every((element,index) => {

    let firstItem = element;
    let secondItem = array2[index];

    const isArrayItem = Array.isArray(firstItem) && Array.isArray(secondItem);

    if (isArrayItem && !eqArrays(firstItem, secondItem)) {
      return false;
    } else if (!isArrayItem && firstItem !== secondItem) {
      return false;
    }

    return true;

  });

  return output;
};

module.exports = eqArrays;