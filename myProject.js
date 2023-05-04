
//import package that allows user input
const prompt = require("prompt-sync")();



legal(userAge);







function welcomeMessage()
{
    console.log("Hi welcome to my slot machine");
    const userAge = prompt("Enter your age and we will determine whether you can use the slot machine or not. ");

    return userAge;


}

//function definitions
function legal(userAge) {

    if(userAge >= 18){

        console.log("That is awesome you can use the gambling machine");
        
    
    }
    else{
        console.log("Sorry but you cannot use the slot machines because you are under 18.");
    }

}





const moneyAmount = prompt("Enter the amount of money you want to deposit: ");