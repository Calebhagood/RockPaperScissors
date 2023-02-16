let userWins = 0;
let computerWins = 0;
let draws = 0;
const buttons = document.querySelectorAll("button");
const roundResults = document.querySelector("#roundResults");
const gameResults = document.querySelector("#gameResults");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetButton = document.getElementById("resetButton");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");



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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       const playerSelection = button.id;
       const computerSelection = getComputerChoice();
       playRound(playerSelection, computerSelection);

       if (userWins === 5 || computerWins === 5){
        declareWinner();
        showResetButton();
       }
    });
});
    

function playRound(playerSelection, computerSelection) {
    const newPlayerSelection = playerSelection.toLowerCase();
    

    if (newPlayerSelection == "rock") {
        if (computerSelection == "Rock"){
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Rock";
        }
        else if (computerSelection == "Paper"){
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Paper beats Rock";
        }
        else{
            userWins += 1;
            roundResults.innerHTML= "You Win! Rock beats Scissors";
        }
    }
    else if (newPlayerSelection == "paper") {
        if (computerSelection == "Rock"){
            userWins += 1;
            roundResults.innerHTML= "You Win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Paper";
        }
        else{
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Scissors beats Paper";
        }
    }
    else if (newPlayerSelection == "scissors"){
        if (computerSelection == "Rock"){
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            userWins += 1;
            roundResults.innerHTML= "You Win! Scissors beats Paper";
        }
        else{
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Scissors";
        }
    }
    if (userWins == 1){
        playerScore.innerHTML = "1";
    }
    else if (userWins == 2){
        playerScore.innerHTML = "2";
    }
    else if (userWins == 3){
        playerScore.innerHTML = "3";
    }
    else if (userWins == 4){
        playerScore.innerHTML = "4";
    }
    else if (userWins == 5){
        playerScore.innerHTML = "5";
    }

    if (computerWins == 1){
        computerScore.innerHTML = "1";
    }
    else if (computerWins == 2){
        computerScore.innerHTML = "2";
    }
    else if (computerWins == 3){
        computerScore.innerHTML = "3";
    }
    else if (computerWins == 4){
        computerScore.innerHTML = "4";
    }
    else if (computerWins == 5){
        computerScore.innerHTML = "5";
    }
}

function declareWinner() {
    if (userWins === 5){
        gameResults.innerHTML = "Congrats! You beat the Computer in Rock Paper Scissors";
    }

    if (computerWins === 5){
        gameResults.innerHTML = "NOOOO! The Computer beat you in Rock Paper Scissors";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

}

function resetGame() {
    userWins = 0;
    playerScore.innerHTML = "0";
    computerWins = 0;
    computerScore.innerHTML = "0";
    roundResults.innerHTML = "";
    gameResults.innerHTML = "";
    resetButton.classList.toggle("hide");
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function showResetButton(){
    resetButton.classList.toggle("hide");
}