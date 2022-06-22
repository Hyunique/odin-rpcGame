
/* Hide intro page and transit into play page */
let startBtn = document.querySelector('.startButton')
let introContainer = document.querySelector('.introContainer')
startBtn.addEventListener('click', () => {
    introContainer.style.opacity = 0;
    introContainer.style.transform = 'scale(0)';
    introContainer.style.display = 'none';
})






/* pick rock paper or scissors randomly */
function computerPlay() {
    let rps = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * rps.length);
    return rps[random];
}

let score = {
    'myScore': 0,
    'compScore': 0
};


/* plays a single round of Rock Paper Scissors 
and declares the winner of the round */
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your method!").toLowerCase();
    computerSelection = computerPlay();

    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt("Not a valid answer. Try again!").toLowerCase();
    }
    if (playerSelection === computerSelection) {
        return "Tie game!"
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            score.compScore += 1
            return "You lose! Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            score.myScore += 1
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            score.myScore += 1
            return "You win! Paper beats Rock!"
        } else if (computerSelection === 'scissors') {
            score.compScore += 1
            return "You lose! Scissors beats Paper"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            score.compScore += 1
            return "You lose! Rock beats Scissors"
        } else if (computerSelection = 'paper') {
            score.myScore += 1
            return "You win! Scissors beats Paper"
        }
    }


}

/*Compare both scores and announce winner*/
function winner() {
    if (score['myScore'] > score['compScore']) {
        alert("You are the winner!")
    } else if (score['myScore'] < score['compScore']) {
        alert("You lost!")
    } else {
        alert("Draw! Same scores")
    }
}

/* Play a 5 round game and reports a winner or loser at the end.*/
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }
    winner()
}

