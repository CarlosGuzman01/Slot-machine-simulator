
//import package that allows user input
const prompt = require("prompt-sync")();

console.log("Hi welcome to my slot machine");
const userAge = prompt("Enter your age and we will determine whether you can use the machine or not. ");

if(userAge >= 18){

    console.log("That is awesome you can use the gambling machine");

}
else{
    console.log("Sorry but you cannot use the slot machines because you are under 18.");
}







//function definitions


