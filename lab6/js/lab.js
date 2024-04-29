// index.js - Using Arrays and Objects in practical code
// Author: Nicholas Lin
// Date:April 29th 2024


//variables
currentYear=2024

myTransport = ["Car, Bike, Walking, Bus, Airplane"];

myMainRide = {
  make: "Mercedes",
  model: "E 63 BiTurbo AMG",
  color: "Black",
  year: 2009,
  age: function() { 
    return currentYear-this.year;
  }
}

// output
document.writeln("My means for travel:" + myTransport + "<br>")
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");