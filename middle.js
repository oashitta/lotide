const eqArrays = function(arr1, arr2) {
  // compare length of arrays
  if (arr1.length !== arr2.length) {
    return false;
  }
  // compare content of arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1} !== ${arr2}`);
  }
};

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

console.log(assertArraysEqual(middle([8, 9, 10, 11, 12, 13, 14]), [11]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]));
console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c','d']));

