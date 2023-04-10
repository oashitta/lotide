const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual(middle([8, 9, 10, 11, 12, 13, 14]), [11]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]));
console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c','d']));

