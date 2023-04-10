const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// create a middle function
// function should take in an array
const middle = function(array) {
  const middleElements = [];
  const length = array.length;

  // if array has one element, return empty array
  // if array has 2 elements, return empty array
  if (length === 1 || length === 2 || length === 0) {
    return [];
  }
  // if an array has an odd number of elements, return the one in the middle -- so element at Math.floor().length / 2) + 1
  else if (length % 2 === 1) {
    let middleIndex = array[Math.floor(length / 2)];
    middleElements.push(middleIndex);
  }
  // if array has an even number of elements, return the 2 in the middle == so elements at --- .length/2 , element at index of result and element at index of result + 1
  else if (length % 2 === 0) {
    let firstIndex = array[Math.floor(length / 2) - 1 ];
    let secondIndex = array[ Math.floor(length / 2) ];
    middleElements.push(firstIndex, secondIndex);
  }
  // function should return middle element(s) of the array 
  return middleElements;
};

module.exports = middle;