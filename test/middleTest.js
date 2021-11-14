const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays'); 
const middle = require('../assertEqual');  

console.log(assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6])), true));
console.log(assertEqual(eqArrays(middle([1, 2])), true));