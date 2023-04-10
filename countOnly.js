// create a function
// Function should take in ollection of items
// function should return counts for specific subset of those items.
// function will count only specific items stated while ignoring others.
const assertEqual = require('./assertEqual');


const countOnly = function (allItems, itemsToCount){
  const results = {};
  console.log(itemsToCount)
  for (const item of allItems){
    // console.log("result:", results)
    // console.log("item:", item )
    if (itemsToCount[item]) { 
      // console.log("item",item," is inside itemsToCount")
      if (results[item]) {
        // console.log("item already in results")
        results[item] += 1;
      } else {
        // console.log("item not yet in results")
        results[item] = 1;
      }
    }
  }
  console.log(results)
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;