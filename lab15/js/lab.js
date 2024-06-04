// index.js - Experimenting with Loops
// Author: Nicholas Lin
// Date:Jun 3rd 2024

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const URL = "https://pokeapi.co/api/v2/move/";

// construct ajax object
const ajaxParams = {
  url: URL,
  data: {},
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

function ajaxSuccess(data){
    console.log("Results:", data);

    results= data.results;
    randomMove= results[getRandomInt(results.length)];

    moveName = randomMove.name;


    $("#output").append("<p id='text'>Your Random move is: "+moveName+ "!<br></p>");
    console.log(moveName);

}
  
function ajaxError(request,error){
    console.log("Oops:", request, error);
}
  
// call jQuery ajax
$('#activate').click(function() {
    $("#text").remove();
    $.ajax(ajaxParams);
})
