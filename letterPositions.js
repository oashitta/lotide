const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// console.log(assertArraysEqual(["hello"], ["hello"]));



// new function called letterPositions
// function will return all indicies (zero-based positions) in the string where each xter is found - so it'll print every index at which the letter appears. 
const letterPositions = function(sentence) {
  let result = {};
  // loop through the sentence.
  for (let i = 0; i < sentence.length; i++){
        // where letter is occuring for the first time, create a key value pair of key (letter): value (array of index)
    // console.log(sentence[i]);
    let letter = sentence[i];
    if(!result[letter]){
      result[letter] = [i]
      // console.log(result)
    }
          // where letter is showing for sunsequent times, add index to value/array created above. use push? result[key].push(index)
    else{
      result[letter].push(i);
    }
  }
  // delete result[" "]
  return result;
};

console.log(letterPositions("hello"));
console.log(letterPositions("this is a longer sentence"));
console.log(assertArraysEqual(letterPositions("this is a longer sentence").o, [ 11 ]))
console.log(assertArraysEqual(letterPositions("this is a longer sentence").i, [ 2, 5 ]))
console.log(assertArraysEqual(letterPositions("this is a longer sentence").s, [ 3, 6, 17 ]))
console.log(assertArraysEqual(letterPositions("this is a longer sentence").n, [ 12, 19, 22  ]))
// console.log(assertArraysEqual(letterPositions("hello").e, [1]));



module.exports = letterPositions;