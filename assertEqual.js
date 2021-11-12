const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    return errorMsg;
  } else if (actual === expected) {
    let errorMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    return errorMsg;
  }
};

module.exports = assertEqual;