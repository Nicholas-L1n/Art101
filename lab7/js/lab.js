// index.js - Using user input to manipulate a string
// Author: Nicholas Lin
// Date:April 5th 2024


//function

function lab7sortName() {
  // takes user input
  var userName= window.prompt("Hi. Please tell me your name so I can fix it");


  // splits user input and splits into an array, sorts it, then rejoins the array items into one string
  var fixedName = userName.toLowerCase().split('').sort().join('');

  return fixedName


}

//display

document.writeln("Here is your fixed name: ", lab7sortName(), "</br>");