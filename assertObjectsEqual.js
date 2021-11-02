const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    let errorMsg = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    console.log(errorMsg);
  } else if (eqObjects(actual, expected) === true) {
    let errorMsg = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    console.log(errorMsg);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] instanceof Array && object2[key] instanceof Array) {
      if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba));
assertObjectsEqual(ab, ba);


const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc));
assertObjectsEqual(ab, abc);