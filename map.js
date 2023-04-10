const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback){
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => `${word} is a word in the words array`);

const results3 = map(words, word => word);
// alternate way to write the function.
// (word) => {return `${word} is a word in the words array`}

console.log(results2);
console.log(assertArraysEqual(results2[0], "ground is a word in the words array" ))
console.log(assertArraysEqual(results2[2], "to is a word in the words array" ))
console.log(assertArraysEqual(results3[4], words[4] ))
console.log(assertArraysEqual(results3[4], words[3] ))

module.exports = map;