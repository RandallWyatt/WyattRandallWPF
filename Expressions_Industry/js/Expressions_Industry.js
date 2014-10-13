/**
 * Created by rwyatt on 10/12/14.
 */
//Let's calculate how many pieces are packed per hour.


//Ask the user their name
var name = prompt("Please type in your name:");
console.log(name);

//Say hello to the user and let them know what we are doing
//ALERT the user
alert("Welcome "+name+"! Let's go ahead and figure out how many boxes you pack per day.");

//Ask them how many pieces are in a box

var piecesInBox = prompt("How many windshields can fit in a box?");

//Console.log out the response
console.log(piecesInBox);

//Figure out how many boxes per day.

var boxesDay = prompt("How many boxes per day do you pack?");
console.log (boxesDay);

//Figure out how many hours worked.

var hoursWorked = prompt("How many hours did you work today? ");
console.log(hoursWorked)

//console.log out the response
var boxOutput = piecesInBox * boxesDay / hoursWorked;
console.log(boxOutput);