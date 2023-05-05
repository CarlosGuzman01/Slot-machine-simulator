
//import package that allows user input
const prompt = require("prompt-sync")();




//calling main function
main();


//main function
function main ()
{
   const age = welcomeMessage();
   
   legal(age);

   const moneyAmount = depositMoney();

}


function welcomeMessage()
{
    console.log("Hi welcome to my slot machine");
    const userAge = prompt("Enter your age and we will determine whether you can use the slot machine or not. ");

    return userAge;

}


function legal(userAge) {

    if(userAge >= 18){

        console.log("That is awesome you can use the gambling machine");

    }
    else{
        console.log("Sorry but you cannot use the slot machines because you are under 18.");

        process.exit();
    }

}


function depositMoney ()
{
    const moneyAmount = prompt("Enter the amount of money you want to deposit: ");
    
    return moneyAmount;
}

