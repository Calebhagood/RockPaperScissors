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
const overlay = document.getElementById("overlay");
const userHealth1 = document.getElementById("leftHealthSection1");
const userHealth2 = document.getElementById("leftHealthSection2");
const userHealth3 = document.getElementById("leftHealthSection3");
const userHealth4 = document.getElementById("leftHealthSection4");
const userHealth5 = document.getElementById("leftHealthSection5");
const computerHealth1 = document.getElementById("rightHealthSection1");
const computerHealth2 = document.getElementById("rightHealthSection2");
const computerHealth3 = document.getElementById("rightHealthSection3");
const computerHealth4 = document.getElementById("rightHealthSection4");
const computerHealth5 = document.getElementById("rightHealthSection5");
const userRock = document.getElementById("userRock");
const userPaper = document.getElementById("userPaper");
const userScissors = document.getElementById("userScissors");
const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const nonFullscreenPage = document.documentElement;
//Fullscreen.html
const exitFullscreenBtn = document.getElementById("exitFullscreenBtn");
const fullscreenPage = document.documentElement;


//used to get random computer choice
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

//allows game to be played through UI buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       const playerSelection = button.id;
       const computerSelection = getComputerChoice();
       playRound(playerSelection, computerSelection);

       if (userWins === 5 || computerWins === 5){
        declareWinner();
        setTimeout(showResetButton, 1250);
       }
    });
});
    
//Sets up how rounds are played and the RPS rules
function playRound(playerSelection, computerSelection) {
    const newPlayerSelection = playerSelection.toLowerCase();
    

    if (newPlayerSelection == "rock") {
        if (computerSelection == "Rock"){
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Rock";
            showChoices("Rock", "Rock")
            setTimeout(removeAnimations, 1250);
        }
        else if (computerSelection == "Paper"){
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Paper beats Rock";
            showChoices("Rock", "Paper")
            setTimeout(removeAnimations, 1250);
        }
        else{
            userWins += 1;
            roundResults.innerHTML= "You Win! Rock beats Scissors";
            showChoices("Rock", "Scissors")
            setTimeout(removeAnimations , 1250);
        }
    }
    else if (newPlayerSelection == "paper") {
        if (computerSelection == "Rock"){
            userWins += 1;
            roundResults.innerHTML= "You Win! Paper beats Rock";
            showChoices("Paper", "Rock");
            setTimeout(removeAnimations, 1250);
        }
        else if (computerSelection == "Paper"){
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Paper";
            showChoices("Paper", "Paper");
            setTimeout(removeAnimations, 1250);
        }
        else{
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Scissors beats Paper";
            showChoices("Paper", "Scissors");
            setTimeout(removeAnimations, 1250);
        }
    }
    else if (newPlayerSelection == "scissors"){
        if (computerSelection == "Rock"){
            computerWins += 1;
            roundResults.innerHTML= "You Lose! Rock beats Scissors";
            showChoices("Scissors", "Rock");
            setTimeout(removeAnimations, 1250);
        }
        else if (computerSelection == "Paper"){
            userWins += 1;
            roundResults.innerHTML= "You Win! Scissors beats Paper";
            showChoices("Scissors", "Paper");
            setTimeout(removeAnimations, 1250);
        }
        else{
            draws += 1;
            roundResults.innerHTML= "Draw! You both chose Scissors";
            showChoices("Scissors", "Scissors");
            setTimeout(removeAnimations, 1250);
        }
    }

    


    if (userWins == 1){
        playerScore.innerHTML = "1";
        computerHealth5.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (userWins == 2){
        playerScore.innerHTML = "2";
        computerHealth4.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (userWins == 3){
        playerScore.innerHTML = "3";
        computerHealth3.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (userWins == 4){
        playerScore.innerHTML = "4";
        computerHealth2.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (userWins == 5){
        playerScore.innerHTML = "5";
        computerHealth1.classList.add("healthLostAnimation");
        disableGameButtons();
    }

    if (computerWins == 1){
        computerScore.innerHTML = "1";
        userHealth5.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (computerWins == 2){
        computerScore.innerHTML = "2";
        userHealth4.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (computerWins == 3){
        computerScore.innerHTML = "3";
        userHealth3.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (computerWins == 4){
        computerScore.innerHTML = "4";
        userHealth2.classList.add("healthLostAnimation");
        disableGameButtons();
        setTimeout(enableGameButtons, 1250);
    }
    if (computerWins == 5){
        computerScore.innerHTML = "5";
        userHealth1.classList.add("healthLostAnimation");
        disableGameButtons();
    }
}

function declareWinner() {
    if (userWins === 5){
        gameResults.innerHTML = "YOU WIN!";
    }

    if (computerWins === 5){
        gameResults.innerHTML = "YOU LOSE";
    }

    setTimeout(disableGameButtons, 1250);

}

function resetGame() {
    userWins = 0;
    playerScore.innerHTML = "0";
    computerWins = 0;
    computerScore.innerHTML = "0";
    roundResults.innerHTML = "";
    gameResults.innerHTML = "";
    overlay.classList.toggle("hide");
    resetButton.classList.toggle("hide");
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    userHealth1.classList.remove("healthLostAnimation");
    userHealth2.classList.remove("healthLostAnimation");
    userHealth3.classList.remove("healthLostAnimation");
    userHealth4.classList.remove("healthLostAnimation");
    userHealth5.classList.remove("healthLostAnimation");
    computerHealth1.classList.remove("healthLostAnimation");
    computerHealth2.classList.remove("healthLostAnimation");
    computerHealth3.classList.remove("healthLostAnimation");
    computerHealth4.classList.remove("healthLostAnimation");
    computerHealth5.classList.remove("healthLostAnimation");
}

function showResetButton(){
    resetButton.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

function disableGameButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableGameButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function showChoices(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        userRock.classList.toggle("win");
        computerScissors.classList.toggle("loss");
    }
    if (playerSelection == "Paper" && computerSelection == "Rock"){
        userPaper.classList.toggle("win");
        computerRock.classList.toggle("loss");
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper"){
        userScissors.classList.toggle("win");
        computerPaper.classList.toggle("loss");
    }

    if (computerSelection == "Rock" && playerSelection == "Scissors"){
        computerRock.classList.toggle("win");
        userScissors.classList.toggle("loss");
    }
    if (computerSelection == "Paper" && playerSelection == "Rock"){
        computerPaper.classList.toggle("win");
        userRock.classList.toggle("loss");
    }
    if (computerSelection == "Scissors" && playerSelection == "Paper"){
        computerScissors.classList.toggle("win");
        userPaper.classList.toggle("loss");
    }

    if (computerSelection == "Rock" && playerSelection == "Rock"){
        computerRock.classList.toggle("loss");
        userRock.classList.toggle("loss");
    }
    if (computerSelection == "Paper" && playerSelection == "Paper"){
        computerPaper.classList.toggle("loss");
        userPaper.classList.toggle("loss");
    }
    if (computerSelection == "Scissors" && playerSelection == "Scissors"){
        computerScissors.classList.toggle("loss");
        userScissors.classList.toggle("loss");
    }
}

function removeAnimations() {
    userRock.classList.remove("win");
    userPaper.classList.remove("win");
    userScissors.classList.remove("win");
    computerRock.classList.remove("win");
    computerPaper.classList.remove("win");
    computerScissors.classList.remove("win");
    userRock.classList.remove("loss");
    userPaper.classList.remove("loss");
    userScissors.classList.remove("loss");
    computerRock.classList.remove("loss");
    computerPaper.classList.remove("loss");
    computerScissors.classList.remove("loss");
}

function openFullscreen() {
    if (nonFullscreenPage.requestFullscreen) {
        nonFullscreenPage.requestFullscreen();
    } else if (nonFullscreenPage.webkitRequestFullscreen) { /* Safari */
    nonFullscreenPage.webkitRequestFullscreen();
    } else if (nonFullscreenPage.msRequestFullscreen) { /* IE11 */
    nonFullscreenPage.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }