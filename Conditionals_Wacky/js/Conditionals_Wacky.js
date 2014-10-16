/**
 * Created by rwyatt on 10/16/14.
 */
//Should I bring the Knights who say NI another shrubbery?


var shrubsNeeded = 2;
var shrubsInPossession = 1;
var shrubsNearBy = 789; //If they ask for another shrub, go find another one.

//if the number of shrubs are not up to par, grovel.
//if there are enough shrubs, run away with haste.
if(shrubsInPossession < shrubsNeeded) {
    //GET ANOTHER SHRUB!
    console.log("You need to get another shrubbery!") ;
}else if(shrubsNearBy > shrubsNeeded)
{
//GET THE SHRUBBERY!
    console.log("Have Patsy go get you another shrubbery");
}else{ (shrubsNearBy >= shrubsNeeded)
    //Go and get another one
    console.log("GET ANOTHER SHRUB YOU ENGLISH KINIGGITS!!");
}