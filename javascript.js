
// Create variables-----

let playerScore = 0;

let computerScore = 0;



// Create function for computerPlay() to randomly returns rock, paper, or scissors-----

function computerPlay(x, y, z) {
    let choices = [x, y, z];

    return choices[Math.floor(Math.random() * choices.length)];
}



// Create function that plays one round of the game, has two parameters, returns string that declares the winner.-----//
// Return a value for the winner-----

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log(`"You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}."`);
   
    } else {
        computerScore++;
        console.log(`"You lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection}. "`);
        
    }
} 




// Create function gameResults() to return results of scoreBoard after 5 rounds-----

function gameResults(playerScore, computerScore) {

    if (playerScore > computerScore) {
        console.log("You are the winner!");

    } else if (playerScore < computerScore) {
        console.log("You lost the game.");

    } else {
        console.log("Its a tie!");
    }

}



// Create function called game(), plays 5 rounds, keeps score, and reports winner or loser at end-----

function game() {

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
            console.log(playerSelection)

        const computerSelection = computerPlay('rock', 'paper', 'scissors');
            console.log(computerSelection)

        playRound(playerSelection, computerSelection);

        console.log(`Your score is ${playerScore} and the computer score is ${computerScore}`);

    }
    gameResults(playerScore, computerScore);

    
}


game();







