const assertEqual = require('./assertEqual')

// take obj and cb
const findKey = function (obj, cb){
  // scan obj and return 1st key for which the cb returns a truthy value
  // const result = {}
  // if no key, return undefined
  for ( let key in obj){
    if (cb(obj[key])){
      return key;
    }
  }
  return undefined;
};


const object = { "Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }}

console.log(assertEqual(findKey(object, x => x.stars === 2), "noma")) // => "noma"
console.log(assertEqual(findKey(object, x => x.stars === 3), "noma")) // => "Akaleri"

const students = {
  "paul" : 22,
  "jane": 19,
  "francis": 44,
  "sarah": 35
}

console.log(assertEqual(findKey(students, x => x === 19), "jane")) 
console.log(assertEqual(findKey(students, x => x === 44), "jane")) 




module.exports = findKey;