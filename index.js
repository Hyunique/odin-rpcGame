function computerPlay() {
    let rps = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

let myScore = 0;
let compScore = 0;


// function playRound(playerSelection, computerSelection) {

//     playerSelection = prompt("Choose your method!").toLowerCase();
//     computerSelection = computerPlay();


//     if (playerSelection === 'rock') {
//         if (computerSelection === 'paper') {
//             compScore += 1
//             return "You lose! Paper beats Rock"
//         } else if (computerSelection === 'scissors') {
//             myScore += 1
//             return "You win! Rock beats Scissors"
//         }
//     } else if (playerSelection === 'paper') {
//         if (computerSelection === 'rock') {
//             myScore += 1
//             return "You win! Paper beats Rock!"
//         } else if (computerSelection === 'scissors') {
//             compScore += 1
//             return "You lose! Scissors beats Paper"
//         }
//     } else if (playerSelection === 'scissors') {
//         if (computerSelection === 'rock') {
//             compScore += 1
//             return "You lose! Rock beats Scissors"
//         } else if (computerSelection = 'paper') {
//             myScore += 1
//             return "You win! Scissors beats Paper"
//         }
//     } else { /* this should be the first line in the function*/
//         return "Tie game!"
//     }

// }



function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your method!").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return "Tie game!"
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            compScore += 1
            return "You lose! Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            myScore += 1
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            myScore += 1
            return "You win! Paper beats Rock!"
        } else if (computerSelection === 'scissors') {
            compScore += 1
            return "You lose! Scissors beats Paper"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            compScore += 1
            return "You lose! Rock beats Scissors"
        } else if (computerSelection = 'paper') {
            myScore += 1
            return "You win! Scissors beats Paper"
        }
    } else {
        playerSelection = prompt("Give valid option!!!!").toLowerCase();
    }
}



/* make a function called game 
play a 5 round game that keeps score
 and reports a winner or loser at the end.*/
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }
}

