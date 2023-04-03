const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !=== ${expected}`);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("coffee", "coffee");
assertEqual("coffee", "milk");
assertEqual(88, 88);
assertEqual(88, 58);
