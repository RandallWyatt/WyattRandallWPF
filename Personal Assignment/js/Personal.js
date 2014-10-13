/**
 * Created by rwyatt on 10/9/14.
 */

//Let's calculate the amount of a paycheck.


//Ask the user their name
var name = prompt("Please type in your name:");

//Say hello to the user and let them know what we are doing
//ALERT the user
alert("Welcome "+name+"! Let's go ahead and figure out how much your paycheck will be!");

//Ask them how many hours were worked

var hoursWorked = prompt("How long is your work week?");

//Console.log out the response
console.log(hoursWorked);

//Figure out how much they make an hour.

var wageMade = prompt("How much do you make an hour?");
console.log (wageMade)

//console.log out the response
var payCheck = hoursWorked * wageMade;
console.log(payCheck);