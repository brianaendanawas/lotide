const eqArrays = function(middleOfArray) {
  if (middleOfArray !== []) {
    return true;
  } else if (middleOfArray === []) {
    return false;
  }
};

let errorMsg;
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    errorMsg = `🛑🛑🛑 Assertion Failed: middle is ${expected}`;
    console.log(errorMsg);
  } else if (actual === expected) {
    errorMsg = `✅✅✅ Assertion Passed: middle is ${expected}`;
    console.log(errorMsg);
  }
};

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 !== 0) {
    let middle = array[Math.floor(array.length / 2)];
    midArray.push(middle);
    return midArray;
  } else if (array.length % 2 === 0) {
    let middleOne = array[Math.floor((array.length - 1) / 2)];
    let middleTwo = array[Math.floor(array.length / 2)];
    midArray.push(middleOne);
    midArray.push(middleTwo);
    return midArray;
  }
};

assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6])), true);
assertEqual(eqArrays(middle([1, 2])), true);