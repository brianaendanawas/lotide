const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    return errorMsg;
  } else if (actual === expected) {
    let errorMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    return errorMsg;
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
console.log(assertEqual((eqObjects(ab, ba)), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual((eqObjects(ab, abc)), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual((eqObjects(cd, dc)), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual((eqObjects(cd, cd2)), false));