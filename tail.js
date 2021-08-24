const tail = function(array) {
  return (array.length <= 1) ? [] : array.slice(1); //optimize and use only .slice
};

module.exports = tail;