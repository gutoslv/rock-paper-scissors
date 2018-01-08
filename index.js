//Create global variables related to user
const weapons = ['Rock', 'Paper', 'Scissors'];
let playerSelection = playerPlay();
let computerSelection = computerPlay();

//Create global variables related to playGame() function
const maxRound = 5
let gameNumber = 0
let roundNumber = 0
let playerScore = 0
let computerScore = 0
let tieScore = 0


//Creates the function to make the computer play
function computerPlay() {
    let weapon = weapons[Math.floor(Math.random() * weapons.length)]
    capitalize(weapon);
    return weapon;
}

//Creates the function to capitalize the weapon
function capitalize(weapon) {
    weapon = weapon.toLowerCase();
    weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1);
}

//Creates the function to make a round be played
function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        result = `You both selected ${computerSelection}, it's a tie.`;
        tieScore++;
        roundNumber++;
        return result;
        }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result = 'Rock beats Scissors. Player wins.';
        playerScore++;
        roundNumber++;
        return result;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result = 'Paper beats rock. Computer wins.';
        computerScore++;
        roundNumber++;
        return result;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result = 'Paper beats rock. Player wins.';
        playerScore++;
        roundNumber++;
        return result;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result = 'Scissors beats paper. Computer wins.';
        computerScore++;
        roundNumber++;
        return result;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result = 'Scissors beats paper. Player wins.';
        playerScore++;
        roundNumber++;
        return result;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result = 'Rock beats Scissors. Computer wins.';
        computerScore++;
        roundNumber++;
        return result;
    }
    else {
        alert('Please insert Rock, Papers or Scissors!')
    }
}

//Creates the function to play a game
function playGame() {
    while (roundNumber < maxRound) {
        playRound(playerSelection, computerSelection);
    }
    if (roundNumber === maxRound) {
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        console.log('Ties: ' + tieScore);
    }
}

//console.log(playRound(playerSelection, computerSelection))