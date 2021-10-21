let errorMsg;
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    errorMsg = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
    return errorMsg;
  } else if (actual === expected) {
    errorMsg = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
    return errorMsg;
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
console.log(errorMsg);
assertEqual(1, 1);
console.log(errorMsg);