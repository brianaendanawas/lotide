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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
      
    } else {
      let repeat = results[sentence[i]];
      repeat.push(i);
    }
  
  }
  delete results[' '];
  return results;
  //console.log(results);
};

//letterPositions("lighthouse in the house");
const result1 = letterPositions("hello");
assertEqual(result1["e"], [1]);