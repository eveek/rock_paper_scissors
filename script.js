
let hunanScore = 0
let computerScore = 0
const gameOptions = ["rock", "paper", "scissors"]

function computerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)]
}


const humanPick = prompt("choose your weapon")
const computerPick = computerChoice(gameOptions)

function playRound(humanPick, computerPick) {
    if(humanPick.toLowerCase() == computerPick){
        return "It's a tie!"
    } else if(
        (humanPick.toLowerCase() == "rock" && computerPick == "scissors") ||
        (humanPick.toLowerCase() == "paper" && computerPick == "rock") ||
        (humanPick.toLowerCase() == "scissors" && computerPick == "paper")
    ){
        hunanScore = hunanScore++
        return `You win! ${humanPick.toLowerCase()} beats ${computerPick}`
    } else if(
        (computerPick == "rock" && humanPick.toLowerCase() == "scissors") ||
        (computerPick == "paper" && humanPick.toLowerCase() == "rock") ||
        (computerPick == "scissors" && humanPick.toLowerCase() == "paper")
    ){
        computerScore = computerScore++
        return `You lose! ${computerPick} beats ${humanPick.toLowerCase()}`
    } else {
        return "Incorrect input"
    }
}

console.log(playRound(humanPick, computerPick))
