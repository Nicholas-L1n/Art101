// index.js - Using user input to manipulate a string
// Author: Nicholas Lin
// Date:April 5th 2024

//Functions takes number from an array, divides it by 10, and returns results as an array.

//variables
var numArray = [1,15,23,6,7,8];


//function

function mathDivide(x) {
  return x/10;
}
numArray.map(mathDivide);

var mapOutput = numArray.map(function(x) {
  return x/10;
})

//output
console.log("Original array: ", numArray)

console.log("Results of test function with map: ", numArray.map(mathDivide));


console.log("Results of Anon Function as a Callback: ", mapOutput);
