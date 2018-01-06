const weapons = ['Rock', 'Paper', 'Scissors'];
let playerSelection = computerPlay();
let computerSelection = computerPlay();

function computerPlay() {
    let weapon = weapons[Math.floor(Math.random() * weapons.length)]
    weapon = weapon.toLowerCase();
    weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1); // first letter to uppercase
    return weapon
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        result = `You both selected ${computerSelection}, it's a tie.`;
        return result;
        }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result = 'Rock beats Scissors. Player wins.';
        return result;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result = 'Paper beats rock. Computer wins.';
        return result;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result = 'Paper beats rock. Player wins.';
        return result;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result = 'Scissors beats paper. Computer wins.';
        return result;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result = 'Scissors beats paper. Player wins.';
        return result;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result = 'Rock beats Scissors. Computer wins.';
        return result;
    }
}

console.log(playRound(playerSelection, computerSelection))