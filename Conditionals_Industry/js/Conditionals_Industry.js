/**
 * Created by rwyatt on 10/16/14.
 */
//At my job "smoking" is the act of releasing a box if no parts are available


var partsLeft = 3;
var partsNeeded = 16;
var partsInRestock = 24; //If I can't find a part it could be in "restock"

//if the number of parts left in the location is less than 3 I need to smoke the box
//if there are parts in "restock" I can use them to fill the box
if(partsLeft > partsNeeded) {
    //you have to smoke the box!
    console.log("You need to smoke the box!") ;
}else if(partsInRestock > partsNeeded)
{
//I can get the parts needed
    console.log("You can get the parts you need");
}else{ (partsNeeded >= partsInRestock)
    //Smoke the box and call for more parts.
    console.log("Smoke the box and call for more parts!");
}