const assertEqual = require('./assertEqual');
// create function
// function should take in sentence
const countLetters = function (sentence){
  // output should return a count of each letter in the sentence.
  const output = {}
  // loop through the string
  for(let letter of sentence.toLowerCase()){
    
    console.log(letter);
    // count the letters and add the number to output.
    // if ( letter !== " " ){
      if (!output[letter]){
        output[letter] = 1;
      } 
      else {
        output[letter] += 1;
      }
    // }
  }

  // return an object with keys as letters and value as numberCount
  delete output[" "];
  return output;
}


console.log(countLetters("This is a sentence"))

module.exports = countLetters;