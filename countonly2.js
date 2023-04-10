const countOnly = function(allItems, itemsToCount){
  const results = {};

  for (const item of allItems) {

    // filter
    if (!itemsToCount[item]){
      // skip the loop
      continue;
    }

    // filter
    if (!results[item]){
      results[item] =0;
    }

    // Happy Path
    results[item]++;
  }

  return results;
}