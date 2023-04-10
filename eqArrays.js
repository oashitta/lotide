const assertEqual = require('./assertEqual');


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

module.exports = eqArrays;