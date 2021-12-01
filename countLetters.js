let errorMsg;
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    console.log(errorMsg);
  } else if (actual === expected) {
    errorMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    console.log(errorMsg);
  }
};

const countLetters = function(sentence) {
  let object = {};
  for (let letter of sentence) {
    if (!object[letter]) {
      object[letter] = 1;
    } else {
      object[letter] = object[letter] + 1;
    }
  }
  delete object[' '];
  return object;
};

const result1 = countLetters("hello my name is briana");
assertEqual(result1["i"], 2);
assertEqual(result1["a"], 3);
assertEqual(result1["y"], 1);