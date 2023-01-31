function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    switch (randNumber) {
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

let userWins = 0;
let computerWins = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    const newPlayerSelection = playerSelection.toLowerCase();
    

    if (newPlayerSelection == "rock") {
        if (computerSelection == "Rock"){
            draws += 1;
            return "Draw! You both chose Rock";
        }
        else if (computerSelection == "Paper"){
            computerWins += 1;
            return "You Lose! Paper beats Rock";
        }
        else{
            userWins += 1;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (newPlayerSelection == "paper") {
        if (computerSelection == "Rock"){
            userWins += 1;
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            draws += 1;
            return "Draw! You both chose Paper";
        }
        else{
            computerWins += 1;
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (newPlayerSelection == "scissors"){
        if (computerSelection == "Rock"){
            computerWins += 1;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            userWins += 1;
            return "You Win! Scissors beats Paper";
        }
        else{
            draws += 1;
            return "Draw! You both chose Scissors";
        }
    }
    else {
        playerSelection = "Invalid";
        return "Invalid user selection";
    }
    
    
}


function game() {
    
    for (let i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerSelection) + ` ${userWins}-${computerWins}-${draws}` );
        
        
    }

    if (userWins > computerWins) {
        return "Congrats! You beat the computer in a 5 round game of Rock Paper Scissors"
    }
    else if (userWins < computerWins) {
        return "Sorry! The Computer beat you in a 5 round game of Rock Paper Scissors"
    }
    else if (userWins == computerWins){
        return "You and the Computer tied in a 5 round game of Rock Paper Scissors"
    }
}
console.log(game());