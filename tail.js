const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !=== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// console.log(tail([1,2,3,4,5,6]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const minusFirst = tail(words);
assertEqual(words.length, 3);
assertEqual(minusFirst.length, 3);
assertEqual(minusFirst.length, 2);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
