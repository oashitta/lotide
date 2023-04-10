const eqArrays = require('../eqArrays');

// Test


console.log(eqArrays([1,2,3,4], [1,2,3,4]))
console.log(eqArrays([1,2,3,4], [1,2,3]))
console.log(eqArrays([1,2,3,4], [5,2,3,4]))
console.log(eqArrays([5,2,3,4], [5,2,3,4]))
console.log(eqArrays(['mot', 'mot'], ['mot', 'mot']))
console.log(eqArrays(['mot', 'not'], ['mot', 'mot']))
console.log(eqArrays(['mot', 'not'], ['mot']))