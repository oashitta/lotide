const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;




  // if(!itemsToRemove.includes(source[i])){
    //   filtered.push(source[i]);
    // }