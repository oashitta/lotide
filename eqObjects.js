const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2){
  const firstObject = Object.keys(obj1);
  const secondObject = Object.keys(obj2);
  
  if (firstObject.length !== secondObject.length){
    return false;
  }
  
  if (firstObject.length === secondObject.length){
    for (let key of firstObject){
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
        eqArrays(obj1[key],obj2[key])
        console.log(obj1[key]);
        console.log(obj2[key]);
        return true;
      }
      else if (obj1[key] === obj2[key]){
        return true;
      }
    }
    return false;

  }

}


// Tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , anotherShirtObject))
console.log(eqObjects(shirtObject , longSleeveShirtObject))


console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));

// multicolor shirts test

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true));

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false));




// for (let key in firstObject){
//   if (Array.isArray(firstObject[key]) === Array.isArray(secondObject[key])){

//     return true;
//   }
// }
// return false;