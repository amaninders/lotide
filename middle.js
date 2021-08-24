// ACTUAL FUNCTION
const middle = function(array) {

  const length = array.length;
  const isEven = (array.length % 2 === 0);
  const startIndex = Math.floor((length - 1) / 2);
  const endIndex = startIndex + (isEven ? 2 : 1);
  
  return (length > 2) ? array.slice(startIndex, endIndex) : [];

};

module.exports = middle;