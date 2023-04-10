# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@oashitta/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: retrieves the first element of an array. 
* `tail`: retrieves all elements of an array except the first.
* `middle`: retrieved the middle element of an array and where the number of elements are even, it provides an average of the two middle numbers. Where an array contains zero, one or two elements, it returns an empty array. 
* `without`: the function takes in two paramenters; parameter 1 being an array and parameter 2 being an array of items to be filtered out of parameter 1. it returns a new array with only elements not removed from the original array. 
* `countOnly`: this function takes in 2 parameters. parameter 1 which is a collection of items and parameter 2 which are the items we want to count. It returns counts for the items specified to be counted. Where an item to count is not included in the the list in parameter 1, it returns undefined. 
* `countLetters`: this function takes in a sentence as a string and returns a count of each letter in that sentence. 
* `letterPositions`: this function returns the indices of each letter in a string where the letter is found. 
* `findKeyByValue`: this function takes in an object and a value. it returns the first key which contains the given value. if no key contains the given value then it returns undfined. 
* `map`: this function takes in two parameters; parameter 1 bein an array to mao and parameter 2 being a callback function. The function returns a new array based on the result of the callback function. 
* `findKey`: this function takes in an object and a callback. it scans the object and returns the first key for whoch the callback returns a truthy value. If no key is found then it returns undefined. 
* `takeUntil`: this function takes in two parameters; an array and a callback function. The function will return a slice of the array with elements taken from the beginning of the array until the callback returns truthy. 

