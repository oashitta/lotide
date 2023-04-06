const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !=== ${expected}`);
  }
};

// function should scan object and return first key that contains given value
// function should return undefined if no given value is found. 

// create findKeyByValue function
// function should take in an object and a value
const findKeyByValue = function(objName, value){
  // loop through objaect
  for (let key in objName){
    // console.log(key);
    // why doesnt dot notation work for the code below?
    if (objName[key] === value){
      // console.log(objName[key]);
      return key;
      
    }
  }
  return undefined;
}

// tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const fruitColors = {
  apples: "red",
  banana: "yellow",
  oranges: "orange",
  plum: "purple",
  tangerine: "orange"

}

assertEqual(findKeyByValue(fruitColors, "yellow"), "banana");
assertEqual(findKeyByValue(fruitColors, "blue"), undefined);
assertEqual(findKeyByValue(fruitColors, "orange"), "oranges");
assertEqual(findKeyByValue(fruitColors, "orange"), "tangerine"); // expect assertion to fail. 