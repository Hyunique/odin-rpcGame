// Play against the computer

// function computerPlay returns R P or S.

// Single round of RPS
// function takes playerSelection and computerSelection
// it returns a string that declares the winner


function computerPlay() {
    let rps = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

/*make it case incensitive*/
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return "You lose! Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return "You win! Paper beats rock!"
        } else if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper"
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return "You lose! Rock beats Scissors"
        } else if (computerSelection = 'Paper') {
            return "You win! Scissors beats Paper"
        }
    } else {
        return "Tie game!"
    }
}


const playerSelection = prompt("Choose your method!");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));