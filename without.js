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

const without = function(source, itemsToRemove) {
  let newArray = source;
  newArray = newArray.filter( function( items ) {
    return !itemsToRemove.includes( items );
  });
  //console.log(newArray);
  return newArray;
};

//console.log(without([1, 2, 3], [1]));
//without([1, 2, 3], [1]);
//without(["1", "2", "3"], [1, 2, "3"]);

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); 
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertEqual(words, ["hello", "world", "lighthouse"]);
