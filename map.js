const eqArrays = function (arr1, arr2){
  // compare length of arrays
  if(arr1.length !== arr2.length){
    return false;
  }
  // compare content of arrays
  for(let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
  }
};
return true;
};

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  }else {
    console.log(`❌❌❌ Assertion failed: ${arr1} !== ${arr2}`);
  }
}

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