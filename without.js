// ACTUAL FUNCTION
const without = (source, itemsToRemove) => {
  return source.filter(x => !itemsToRemove.includes(x))
};

module.exports = without;