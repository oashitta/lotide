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

const takeUntil = function (array, callback) {
  const result = [];
// function will return a slice of "array" with elements taken from the beginning.
  for (const item of array){
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }

return result;
}

const family = ["mum", "dad", "sister", "brother", "cousin", "step-dad", "step-mum"]

console.log(takeUntil(family, x => x === "cousin" ))
console.log(takeUntil(family, x => x === "uncle" ))

console.log(assertArraysEqual(takeUntil(family, x => x === "cousin" ), ["mum", "dad", "sister", "brother"]));
console.log(assertArraysEqual(takeUntil(family, x => x === "cousin" ), ["mum", "dad", "sister"]));

console.log('---');

const fruits = ["banana", "tangerine",  "orange", "grapes", "avocado"];
console.log(takeUntil(fruits, x => x === "watermelon"));
console.log(takeUntil(fruits, x => x === "grapes"));
console.log(assertArraysEqual(takeUntil(fruits, x => x === "watermelon" ), ["banana", "tangerine",  "orange", "grapes", "avocado"]));
console.log(assertArraysEqual(takeUntil(fruits, x => x === "watermelon" ), ["banana", "tangerine",  "orange", "grapes", "avocado"]));
console.log(assertArraysEqual(takeUntil(fruits, x => x === "watermelon" ), ["banana", "tangerine",  "orange"]));

console.log('---');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



