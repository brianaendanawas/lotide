const findKey = function(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key]) === true) {
        return key;
      }
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    return errorMsg;
  } else if (actual === expected) {
    let errorMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    return errorMsg;
  }
};

console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma"));