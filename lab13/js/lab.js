// index.js - Experimenting with Loops
// Author: Nicholas Lin
// Date:May 28th 2024

// creates empty string
var string=""

// Function to output Fizz, Buzz, Boom, or a combination of the three based on the value of i in a range of 0 to 200
function fizzBuzz() {
  // for loop iterates through range of 0 to 200
  for (var i=0; i<200; i++) {

    // resets string to be empty at the beginning of each loop
    string=''

    // conditionals use modulus to see if i is a multiple of 3, 5, 7, or a combination of the three.

    if (i==0) {
      continue
    } if (i%3 == 0) {
      string+= "Fizz"

    } if (i%5 == 0) {
      string+= "Buzz"


    } if (i%7 == 0) {
      string+= "Boom"

    } if (!string == "") {
      
    // adds integer i and final string to the div output
    $("#output").append("<p>"+i+" - "+ string+ "!<br></p>");
    console.log("appending function output")

    } if (string == "") {
      $("#output").append("<p>"+i+"<br></p>");
      console.log("appending function output")
  
      }
    console.log(i+string);
  }
}

fizzBuzz();