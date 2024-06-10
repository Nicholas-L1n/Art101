// index.js - Experimenting with JSON & APIs
// Author: Nicholas Lin
// Date:Jun 9th 2024


const URL = "https://xkcd.com/info.0.json";

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

    
    var comicObj = data;
    title = comicObj.title;

    var image = $('<img>', {
        src: comicObj.img,
        alt: comicObj.alt
    });

    image.addClass('photo');


    $("#output").append("<p id='text'>Title: "+title+ "!</p>");
    $("#output").append(image);

}
  
function ajaxError(request,error){
    console.log("Oops:", request, error);
}


// call jQuery ajax
$.ajax(ajaxParams);
