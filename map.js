const eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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

assertArraysEqual(results1, [ 't', 'c', 'c', 'r', 'l' ]);
assertArraysEqual(results2, [ 'a', 'a', 'o', 'o', 'i' ]);
assertArraysEqual(results3, [ 8, 5, 4, 4, 4 ]);