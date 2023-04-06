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
        // console.log(obj1[key]);
        // console.log(obj2[key]);
        return true;
      }
      else if (obj1[key] === obj2[key]){
        return true;
      }
    }
    return false;
  }
}


const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`)
  }else {
    console.log(`❌❌❌ Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

console.log(assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" }));
console.log(assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium", height: 2 }));

