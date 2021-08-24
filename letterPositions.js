const letterPositions = function(sentence) {
  const results = {};
  Array.from(sentence).forEach((element, index) => {
    (results[element]) ? results[element].push(index) : results[element] = [index];
  });
  return results;
};

module.exports = letterPositions;