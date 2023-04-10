const eqArrays = require('./eqArrays');



const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  }else {
    console.log(`❌❌❌ Assertion failed: ${arr1} !== ${arr2}`);
  }
}

// console.log(assertArraysEqual([1,2,3], [1,2,3]))
// console.log(assertArraysEqual([1,3,3], [1,2,3]))

module.exports = assertArraysEqual;