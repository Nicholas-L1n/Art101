// index.js - Experimenting with Jquery
// Author: Nicholas Lin
// Date:May 12th 2024



// JQUERY Button
$(".column").append("<button class='button-challenge'>Make Special</button>");

// JQUERY Event Listener
$(".button-challenge").click(function(){
    $(this).parent().toggleClass("special");

});