
//import package that allows user input
const prompt = require("prompt-sync")();

//global variables
const ROWS = 3;
const COLS = 3;


const SYMBOLS_AMOUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

//calling main function
main();


//main function
function main ()
{
   const actualAge = welcomeMessage();
   
   legal(actualAge);

   let actualMoneyAmount = depositMoney();

   const actualNumberOfLines = gettingNumberOfLines();

   const actualBetAmount = getBetAmount(actualMoneyAmount, actualNumberOfLines);

}

function welcomeMessage()
{
    console.log("Hi welcome to my slot machine");

    while(true)
    {
        const userAge = prompt("Enter your age and we will determine whether you can use the slot machine or not. ");
        const actualAge = parseFloat(userAge);
    
    if(isNaN(actualAge) ||actualAge <=0 || actualAge > 122 ) {
        console.log("Invalid age!!!, please try again.")
    }
    else{
        return actualAge;
    }

   }
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
    while(true) 
    {
    const moneyAmount = prompt("Enter the amount of money you want to deposit: ");
    const actualMoneyAmount = parseFloat(moneyAmount)

    if(actualMoneyAmount <= 0 || isNaN(actualMoneyAmount)) 
    {
        
        console.log("Invalid deposit amount!!!, please try again.")
    
    }else
    {
        return actualMoneyAmount;
    }
}
    
}

function gettingNumberOfLines()
{
    while(true){
        const numberOfLines = prompt("Enter the number of lines you want to bet on (1-3): ");
        const actualNumberOfLines = parseFloat(numberOfLines);

        if(isNaN(actualNumberOfLines) || actualNumberOfLines <= 0 || actualNumberOfLines > 3 )
        {
            console.log("Invalid number of lines!!! please try again");
        }
        else{
            return actualNumberOfLines;
        }
    }
}

function getBetAmount(moneyAmount, actualNumberOfLines)
{
    while (true)
    {
        const betAmount = prompt("Enter the amount of money you want to bet per line. ");
        const actualBetAmount = parseFloat(betAmount);

        if(isNaN(actualBetAmount) || actualBetAmount <= 0 || actualBetAmount > moneyAmount/actualNumberOfLines)
        {
            console.log("Invalid bet amount!!! please try again.");
        
        }else{
            return actualBetAmount;
        }
    }
}





