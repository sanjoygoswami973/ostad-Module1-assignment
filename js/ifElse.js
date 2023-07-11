/* ===============temperature================*/
var Temperature = 25;
document.write("Temperature= " + Temperature + "</br>");

/* ===============temperature================*/
var temperature = 20;
if (temperature >=30) {
    console.log( "It's a hot day!")
}else {
    console.log( "It's a normal day!");
}

/* ===============Raining================*/
var Raining = true;
var Sunny = false;
document.write("Raining: " + Raining + "</br>");
document.write("Sunny: " + Sunny + "</br>");

/* ===============isRaining================*/
var isRaining = true; // Assuming it's currently raining
if (isRaining) {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Enjoy your day!");
}

/* ===============time automatically================*/
var today = new Date();

var DD = today.getDate();
var MM = today.getMonth();
var YYYY = today.getFullYear();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();

console.log(hh);

/* ===============time manually================*/
var time = 18; // Assuming the current time is 6:00 PM

if (time >= 6 && time <= 12) {
  console.log("Good morning!");
} else if (time > 12 && time <= 18) {
  console.log("Good afternoon!");
} else if (time > 18 && time <= 24) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}