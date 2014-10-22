/**
 * Created by rwyatt on 10/22/14.
 */

function outptMsg(){
    console.log("Hello World");
}

//Functions - Variable Scope

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
calcArea();
console.log(width);