// index.js - Experimenting with Jquery
// Author: Nicholas Lin
// Date:May 12th 2024

// counter for number of messages displayed on screen
pageCounter = 0

// counter for message shift function
evenCounter = 1


function generateText() {

    // if else conditional so that the left side text is from a predetermined source and the right side is input based.
    if ((evenCounter%2)==1) {

        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    } else {
        var text= $("#input").val();
    }
    
    // "random" text generator
    const min = 3;
    const max= 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

    // if else conditional on that maxes the number of "text" on the page to 5 and returns the predetermined text to the left and input field to the right
    if (pageCounter < 5) {
        pageCounter+=1;
        evenCounter+=1
        console.log("if: add text block.");
        if ((evenCounter%2)==1) {
            return text
        } else {
            return text.slice(randStart, randStart + randLen);
        }

    } else if (pageCounter>4) {
        $("#text").remove();
        $("#text").remove();
        $("#text").remove();
        $("#text").remove();
        $("#text").remove();
        console.log("elif: remove previous text, set counter back to 0, add another text block.");
        pageCounter=1
        evenCounter+=1
        if ((evenCounter%2)==1) {
            return text
        } else {
            return text.slice(randStart, randStart + randLen);
        }
    }
}

function bubbleGenerator() {
    const newText = generateText();    

    // Conditional statement to shift messages to the left or right
    if ((evenCounter%2)==1) {
        // rehides input box
        $("#input").toggleClass("hide");
        $('#make-convo').html("Generate Text");

        $("#output").append('<div id= "text"><p class="message shift rightMsg">' + newText + '</p></div>');
        console.log("Right MSG")
    } else {
        // unhides input box
        $("#input").toggleClass("hide");
        $('#make-convo').html("Respond");

        $("#output").append('<div id= "text" ><p class="message leftMsg">' + newText + '</p></div>');
        console.log("Left MSG")
    }
}

// example to make sure you know what to do
bubbleGenerator();

// JQUERY Event Listener
$("#make-convo").click(bubbleGenerator);