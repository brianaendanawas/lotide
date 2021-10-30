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

const eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const names = ["taehyung", "calum", "cole", "rose", "lisa"];

const results1 = map(names, name => name[0]);
console.log(results1);

const results2 = map(names, name => name[1]);
console.log(results2);

const results3 = map(names, name => name.length);
console.log(results3);

assertEqual((eqArrays(names, results1)), false);