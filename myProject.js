
//import package that allows user input.
const prompt = require("prompt-sync")();

//global variables.
const ROWS = 3;
const COLS = 3;

//The amount of symbols of the slot machine.
const SYMBOLS_AMOUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

//The value of each symbol of the slot machine.
const SYMBOL_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

//calling main function.
main();


//main function.
function main ()
{
   const actualAge = welcomeMessage();
   
   legal(actualAge);

   let actualMoneyAmount = depositMoney();

   while(true)
   {
   
    displayMoneyAmount(actualMoneyAmount);

   const actualNumberOfLines = gettingNumberOfLines();

   const actualBetAmount = getBetAmount(actualMoneyAmount, actualNumberOfLines);

   actualMoneyAmount = actualMoneyAmount - actualBetAmount * actualNumberOfLines;

   const reels = spinMachine();

   const rows = switchingReels(reels);

   printSlotMachine(rows);

   const winnings = getProfit(rows, actualMoneyAmount, actualNumberOfLines);

   actualMoneyAmount = actualMoneyAmount + winnings;

   displayWinnings(winnings);

    let again = playAgain();

    if(again){
        break;
    }

   }

}

/*
Function that displays the welcome message, prompts the user to enter his/her age, and validates 
if the input is valid.
*/

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

/*
Function that checks if the user has legal age to use the slot machine or not.
*/
function legal(userAge) {

    if(userAge >= 18){

        console.log("That is awesome you can use the gambling machine");

    }
    else{
        console.log("Sorry but you cannot use the slot machines because you are under 18.");

        process.exit();
    }

}

/*
Function that prompts the user to enter the amount of money they want to deposit, and validates
if the money amount is valid or not.
*/
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


/*
Function that prompts the user about how many lines they want to bet on the slot machine, 
and validates if the number of lines is valid or not. 
*/
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
/*
Function that prompts the user how much money they want to bet per line, and validates if the bet per line
is valid or not.
*/

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

/*
Function that spins the slot machine 
*/
function spinMachine()
{
    const symbols = [];
    for ([symbol, amount] of Object.entries(SYMBOLS_AMOUNT)){
        for(let i = 0; i < amount; i++){
            symbols.push(symbol)
        }

    }
    const reels = [];

    for(let i = 0; i < COLS; i++){
    reels.push([]);
    const reelSymbols = [...symbols];
    for(let j = 0; j <ROWS; j++){
            const randIndex = Math.floor(Math.random() * reelSymbols.length);
        const chosenSymbol = reelSymbols[randIndex];
        reels[i].push(chosenSymbol);
        reelSymbols.splice(randIndex, 1);
    }
}


return reels;
}


/*
Function that switches the position of the reels. The columns become the rows. 
*/
function switchingReels(reels){
    const rows = [];
    
    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows; 
}

/*
Function that iterates through the rows and prints the slot machine. 
*/
function printSlotMachine(rows){

    for(const row of rows){
        let rowString = "";
        for (const [i, symbol] of row.entries()){
            rowString = rowString + symbol;
            if (i != row.length - 1){
                rowString = rowString + " | ";
            }
        }
        console.log(rowString);
    }

}


/*
Function that calculates how much money the user gets if he/she wins in the slot machine. 
*/

function getProfit(rows, bet, lines) {
    let winnings = 0;

    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let sameSymbols = true;


        for (const symbol of symbols) {
            if(symbol != symbols[0]){
                sameSymbols = false;
                break;
            }
        }

        if(sameSymbols){
            winnings = winnings + bet * SYMBOL_VALUES[symbols[0]]; 
        }


    }

    return winnings; 


}

/*
Function that displays any the winnings of the user. 
*/
function displayWinnings(winnings){
    if(winnings == 0){
        console.log("Sorry! you did not win anything");
    }
    else{
        console.log("Nice! you just won: $" + winnings);
    }
}

/*nod
Function that displays the amount of money that the user currently has
*/
function displayMoneyAmount(actualMoneyAmount){

    if(actualMoneyAmount <= 0){
        console.log("You ran out of money, so you can't use the slot machine anymore");

        process.exit();

        
    }

    console.log("You currently have a balance of $" + actualMoneyAmount);

}


/*
Function that prompts the user whether he/she wants to use the slot machine again and, validates
the input. 
*/
function playAgain(){

    let again = false;
    let runAgain = prompt("Would you like to play again (y/n)? ");
    
    while(true){

    if (runAgain == "N" || runAgain == "n"){
        again = true;
        return again;

    }else if(runAgain == "Y" || runAgain == "y"){
        return again; 
    }

    runAgain = prompt("Invalid input!!! You have to type (y/n) ");  
}

}




