// Global var
let userChoice;
let compChoice;
let playAgain;
let ranNum;
let score;

function playGame() {
    //Prompt the user for their choice
    while (true) {
        userChoice = prompt('Please make a choice: rock, paper, or scissors.').toLowerCase();
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            alert('Please enter a valid value (rock, paper, or scissors)');
        } else {
            break;
        }
    }
    // Collect computer choise
    ranNum = Math.random();
    if (ranNum <= .33) {
        compChoice = 'rock';
    } else if (ranNum <= .66) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }

    // Determine winner
    if (userChoice === 'rock' && compChoice === 'paper') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        score = `You won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        score = `You won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        score = `You won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`;
    } else {
        score = `It\'s a tie. Computer chose ${compChoice}. You chose ${userChoice}`;
    }

    return score;
}

function main() {
    alert('Welcome to the Rock, Paper, Scissors Game.');
    playAgain = 'y';
    while (playAgain === 'y') {
        alert(playGame());
        playAgain = prompt('Do you want to play again? (y/n)', 'y');
    }
    alert('Thank you for playing the game.');
}
main();

