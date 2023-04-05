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

const without = function(source, itemsToRemove){
  // array to store filtered elements
  let filtered = [];
  // loop through each element in the source array
  for (let i = 0; i < source.length; i++){
    // loop through items in the itemsToRemove array and compare
    let remove = false;
    for(let j = 0; j < itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]){
        remove = true;
      }
    }
    if(!remove){
      filtered.push(source[i]);
    }
  
  }
  return filtered;
}

console.log(without([1,2,3,4,5], [1,5]))






  // if(!itemsToRemove.includes(source[i])){
    //   filtered.push(source[i]);
    // }