// index.js - Experimenting with Jquery
// Author: Nicholas Lin
// Date:May 19th 2024



// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

  // click listener for button
$("#submit").click(function(){
    userName = $("#user-name").val();

    userNameSorted = sortString(userName);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});