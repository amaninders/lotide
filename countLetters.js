const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    (results[letter]) ? results[letter] += 1 : results[letter] = 1;
  }
  return results;
};

module.exports = countLetters;