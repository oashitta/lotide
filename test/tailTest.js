const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Tests
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