const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !=== ${expected}`);
  }
};

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

console.log(eqArrays([1,2,3,4], [1,2,3,4]))
console.log(eqArrays([1,2,3,4], [1,2,3]))
console.log(eqArrays([1,2,3,4], [5,2,3,4]))
console.log(eqArrays([5,2,3,4], [5,2,3,4]))
console.log(eqArrays(['mot', 'mot'], ['mot', 'mot']))
console.log(eqArrays(['mot', 'not'], ['mot', 'mot']))
console.log(eqArrays(['mot', 'not'], ['mot']))