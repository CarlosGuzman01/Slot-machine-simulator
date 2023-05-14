
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

   const reels = spinMachine();

   const rows = switchingReels(reels);

   printSlotMachine(rows);

   const winnings = getProfit(rows, actualMoneyAmount, actualNumberOfLines);

   finalMessage(winnings);

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

function finalMessage(winnings){
    if(winnings == 0){
        console.log("Sorry! you did not win anything");
    }
    else{
        console.log("Nice! you just won: $" + winnings);
    }

}




