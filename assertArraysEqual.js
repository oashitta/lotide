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

// console.log(assertArraysEqual([1,2,3], [1,2,3]))
// console.log(assertArraysEqual([1,3,3], [1,2,3]))