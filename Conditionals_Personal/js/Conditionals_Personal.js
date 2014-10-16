/**
 * Created by rwyatt on 10/15/14.
 */
//At my job "smoking is the act of releasing a box if no parts are available


var pantsNumber = 8;
var minPantsNumber = 1;
var pantsWithHoles = 2; //If I can't

//if the number of pants is less than 4 I need to do laundry
//if I only have pants with holes I definitely have to do laundry
if(pantsNumber > minPantsNumber) {
    //you don't have to do laundry!
    console.log("You can get by without doing laundry!") ;
}else if(minPantsNumber > pantsWithHoles)
{
//I can get by again without doing laundry
    console.log("You can go one more day without doing laundry");
}else{ (minPantsNumber > pantsNumber)
    //You have to do laundry.
    console.log("Sorry kid, you have to do laundry or you wont have a job!");
}