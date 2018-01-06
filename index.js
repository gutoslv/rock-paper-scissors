const weapons = ['Rock', 'Paper', 'Scissors'];
let playerSelection = 'Rock';
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
        result = 'Rock beats scissors. Player wins';
        return result;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result = 'Paper beats rock. Computer wins';
        return result;
    }
    else if (playerSelection === 'Paper')
}

console.log(playRound(playerSelection, computerSelection))