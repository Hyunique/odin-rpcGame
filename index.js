
/* Hide intro page and transit into play page */
let startBtn = document.querySelector('.startButton')
let introContainer = document.querySelector('.introContainer')
startBtn.addEventListener('click', () => {
    introContainer.style.opacity = 0;
    introContainer.style.transform = 'scale(0)';
    introContainer.style.display = 'none';
})

let myScoreDisplay = document.querySelector('.myScoreDisplay')
let compScoreDisplay = document.querySelector('.compScoreDisplay')
let statusText = document.querySelector('.status')
let myScore = 0
let compScore = 0



/*Get alt for playerselection and run playRound function*/
let playerRock = document.querySelector('.rock')
const rockAlt = playerRock.getAttribute('alt')
playerRock.addEventListener('click', () => {
    playerSelection = rockAlt;
    computerSelection = computerPlay()
    console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
})

let playerPaper = document.querySelector('.paper')
const paperAlt = playerPaper.getAttribute('alt')
playerPaper.addEventListener('click', () => {
    playerSelection = paperAlt;
    computerSelection = computerPlay()
    console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
})

let playerScissors = document.querySelector('.scissors')
const scissorsAlt = playerScissors.getAttribute('alt')
playerScissors.addEventListener('click', () => {
    playerSelection = scissorsAlt;
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})




/* pick rock paper or scissors randomly */
function computerPlay() {
    let rps = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * rps.length);
    return rps[random]
}


/* plays a single round of Rock Paper Scissors 
and declares the winner of the round */
function playRound(playerSelection, computerSelection) {
    // while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     playerSelection = prompt("Not a valid answer. Try again!").toLowerCase();
    // }
    if (playerSelection === computerSelection) {
        statusText.textContent = "Tie game!"
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            compScore += 1
            statusText.textContent = "You lose! Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            myScore += 1
            statusText.textContent = "You win! Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            myScore += 1
            statusText.textContent = "You win! Paper beats Rock!"
        } else if (computerSelection === 'scissors') {
            compScore += 1
            statusText.textContent = "You lose! Scissors beats Paper"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            compScore += 1
            statusText.textContent = "You lose! Rock beats Scissors"
        } else if (computerSelection = 'paper') {
            myScore += 1
            statusText.textContent = "You win! Scissors beats Paper"
        }
    }
    myScoreDisplay.textContent = myScore
    compScoreDisplay.textContent = compScore

}


/*Compare both scores and announce winner*/
// function winner() {
//     if (score['myScore'] > score['compScore']) {
//         alert("You are the winner!")
//     } else if (score['myScore'] < score['compScore']) {
//         alert("You lost!")
//     } else {
//         alert("Draw! Same scores")
//     }
// }

/* Play a 5 round game and reports a winner or loser at the end.*/
// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound())
//     }
//     winner()
// }

