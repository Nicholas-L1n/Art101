// index.js - Experimenting with Jquery
// Author: Nicholas Lin
// Date:May 12th 2024


counter = 0

function generateRandomText() {
    var text= $("#input").val();
    const min = 3;
    const max= 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;


    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    if (counter < 3) {
        counter+=1;
        console.log("if: add text block.");
        return text.slice(randStart, randStart + randLen);
    } else if (counter==3)
        $(".text").remove();
        $(".text").remove();
        $(".text").remove();
        console.log("elif: remove previous text, set counter back to 0, add another text block.");
        counter=1
        return text.slice(randStart, randStart + randLen);
    
}



// JQUERY Event Listener
$("#make-convo").click(function(){

    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');


});