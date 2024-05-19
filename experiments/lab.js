// index.js - experiment with DOM manipulation.
// Author: Nicholas Lin
// Date:May 17th 2024




$("#my-button").click(function(){
    var name= $("#input").val();

    $('#title').html("Hello " + name );
});

