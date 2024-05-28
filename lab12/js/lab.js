// index.js - Experimenting with COnditionals
// Author: Nicholas Lin
// Date:May 28th 2024

var houseSelected = ""

gryff = "Gryffindor was founded by Godric Gryffindor and favoured students who possessed characteristics such as courage, bravery and determination. The house colours were scarlet and gold, and the emblematic animal was a lion, which decorated the walls of the Gryffindor common room.";

raven = "Ravenclaw was founded by medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours.";

slyth = "Slytherin was founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition.";

huff = "Hufflepuff was founded by the medieval witch Helga Hufflepuff. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members."

// array for house descriptions, could be an object but I'm lazy
houseDes = [gryff, raven, slyth, huff]


// Sorts the characters of a string in alphabetical order.
function sortingHat(str) {
  length = str.length;
  mod = length%4;
  if (mod==0) {
    houseSelected = houseDes[0];
    return "Gryffindor"
  } else if (mod==1) {
    houseSelected = houseDes[1];
    return "Ravenclaw"
  } else if (mod==2) {
    houseSelected = houseDes[2];
    return "Slytherin"
  } else if (mod==3) {
    houseSelected = houseDes[3];
    return "Hufflepuff"
  } 
}


// event listener with anon function to remove any prior text and run the sorting hat function with the parameter of the input field.
$('.button').click(function() {
  $("#text").remove();
  $("#text").remove();
  var name = $("#input").val();
  house = sortingHat(name);
  sortString = "The Sorting Hat has sorted you into ";
  $('#output').append('<div id= "text"><p>' + sortString + house + '</p></div>');
  $('#output').append('<div id= "text"><p>' + houseSelected + '</p></div>');

})