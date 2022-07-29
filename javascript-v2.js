const choiceButtons = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');
const scorePlayer = document.getElementById('score-player');
const scoreComputer = document.getElementById('score-computer');
const mainSection = document.getElementById('main');
const playAgain = document.createElement("button");
let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

choiceButtons.forEach(choiceButton => choiceButton.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerPlay();
    playRound(); 
}))


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    computerSelection = choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {

    if (playerSelection === computerSelection) {
        result = "It's a tie!";

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        result = `"You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}."`;
   
    } else {
        computerScore++;
        result = `"You lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}. "`;
        
    }

    resultDisplay.innerHTML = result;
    scorePlayer.innerHTML = playerScore;
    scoreComputer.innerHTML = computerScore;

    gameResults(); 
    resetBtn();
} 


function gameResults() {
    if (playerScore === 5) {
        mainSection.innerHTML = "<h2>YOU ARE THE WINNER!</h2>"
    }
    
    if (computerScore === 5) {
        mainSection.innerHTML = "<h2>You lost the game.</h2>"
    } 
}


function resetBtn() {
    if (playerScore || computerScore === 5) {
        playAgain.innerHTML = "Play Again";
        playAgain.classList.add('reset-btn');
        mainSection.appendChild(playAgain);
    }
}

playAgain.onclick = () => {
    window.location.reload();
  }