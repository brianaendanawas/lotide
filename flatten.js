let errorMsg;
const assertEqual = function(flattened) {
  for (let i = 0; i < flattened.length; i++) {
    if (Array.isArray(flattened[i]) === true) {
      errorMsg = `🛑🛑🛑 Assertion Failed: ${flattened} is not flattened`;
      console.log(errorMsg);
    } else if (Array.isArray(flattened[i]) === false) {
      errorMsg = `✅✅✅ Assertion Passed: ${flattened} is flattened`;
      console.log(errorMsg);
    }
  }
};

const flatten = function(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      return array.flat();
    } else {
    }
  } 
}

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
flatten([1, 2, [3, 4], 5, [6]]);
assertEqual(flatten([1, 2, [3, 4], 5, [6]]));

