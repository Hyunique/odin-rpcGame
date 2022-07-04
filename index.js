let myScoreDisplay = document.querySelector('.myScoreDisplay')
let compScoreDisplay = document.querySelector('.compScoreDisplay')
let statusText = document.querySelector('.status')
let myScore = 0
let compScore = 0
let round = 0
let winningScore = 3
let toolBtn = document.querySelector('.toolBtn')

/* Hide intro page and transit into play page */
let startBtn = document.querySelector('.startButton')
let introContainer = document.querySelector('.introContainer')
startBtn.addEventListener('click', () => {
    introContainer.style.opacity = 0;
    introContainer.style.transform = 'scale(0)';
    introContainer.style.display = 'none';
})

const gameNumber = document.querySelector('#gamenumber')
gameNumber.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    // resetGame(); /* ResetGame is executed */
})

/*Get alt for playerselection and run playRound function*/
let playerRock = document.querySelector('.rock')
const rockAlt = playerRock.getAttribute('alt')
playerRock.addEventListener('click', () => {
    playerSelection = rockAlt;
    computerSelection = computerPlay()
    // console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    isWinner()
})

let playerPaper = document.querySelector('.paper')
const paperAlt = playerPaper.getAttribute('alt')
playerPaper.addEventListener('click', () => {
    playerSelection = paperAlt;
    computerSelection = computerPlay()
    // console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    isWinner()
})

let playerScissors = document.querySelector('.scissors')
const scissorsAlt = playerScissors.getAttribute('alt')
playerScissors.addEventListener('click', () => {
    playerSelection = scissorsAlt;
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    isWinner()
})

let magicScore = document.querySelector('.magic')
magicScore.addEventListener('click', () => {
    let magicAnswer = prompt('Guess the magic keyword. You win if answer is correct!')
    if (magicAnswer === 'fire') {
        round += 1
        myScore += 8
        myScoreDisplay.textContent = myScore
    }
})


/* pick rock paper or scissors randomly */
function computerPlay() {
    let rps = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * rps.length);
    return rps[random]
}



function isWinner() {
    if (round === winningScore) {
        if (myScore > compScore) {
            alert("You Won!")
        } else if (myScore < compScore) {
            alert("You Lost!")
        } else {
            alert("Draw! Same score")
        }
    }
}

/* plays a single round of Rock Paper Scissors 
and declares the winner of the round */
function playRound(playerSelection, computerSelection) {
    if (round < winningScore) {
        round += 1

        if (playerSelection === computerSelection) {
            statusText.textContent = "Tie game!"
            compScore += 1
            myScore += 1
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
            } else if (computerSelection === 'paper') {
                myScore += 1
                statusText.textContent = "You win! Scissors beats Paper"
            }
        }
        myScoreDisplay.textContent = myScore
        compScoreDisplay.textContent = compScore

    }
}

let resetBtn = document.querySelector('.resetBtn')
resetBtn.addEventListener('click', () => {
    myScore = 0
    compScore = 0
    round = 0
    myScoreDisplay.textContent = myScore
    compScoreDisplay.textContent = compScore
})


