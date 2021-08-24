const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
};

module.exports = findKeyByValue;