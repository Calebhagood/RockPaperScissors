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

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, or Scissors?");

function playRound(playerSelection, computerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();

    if (newPlayerSelection == "rock") {
        if (computerSelection == "Rock")
            return "Draw! You both chose Rock";
        else if (computerSelection == "Paper")
            return "You Lose! Paper beats Rock";
        else
            return "You Win! Rock beats Scissors";
    }
    else if (newPlayerSelection == "paper") {
        if (computerSelection == "Rock")
            return "You Win! Paper beats Rock";
        else if (computerSelection == "Paper")
            return "Draw! You both chose Paper";
        else
            return "You Lose! Scissors beats Paper";
    }
    else if (newPlayerSelection == "scissors"){
        if (computerSelection == "Rock")
            return "You Lose! Rock beats Scissors";
        else if (computerSelection == "Paper")
            return "You Win! Scissors beats Paper";
        else
            return "Draw! You both chose Scissors";
    }
    else {
        return "Invalid user selection";
    }
}

console.log(playRound(playerSelection, computerSelection));