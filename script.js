const gameOptions = ["Rock", "Paper", "Scissors"]

function computerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)]
}

const humanPick = prompt("choose your weapon")
const computerPick = computerChoice(gameOptions)

function playRound(humanPick, computerPick) {
    const humanPick = humanPick.toUpperCase()
    const computerPick = computerPick.toUpperCase()

    if(humanPick == computerPick){
        return "It's a tie!"
    } else if(
        (humanPick == "ROCK" && computerPick == "SCISSORS") ||
        (humanPick == "PAPER" && computerPick == "ROCK") ||
        (humanPick == "SCISSORS" && computerPick == "PAPER")
    ){
        return `You win! ${humanPick} beats ${computerPick}`
    } else if(
        (computerPick == "ROCK" && humanPick == "SCISSORS") ||
        (computerPick == "PAPER" && humanPick == "ROCK") ||
        (computerPick == "SCISSORS" && humanPick == "PAPER")
    ){
        return `You lose! ${computerPick} beats ${humanPick}`
    }
}

// let test1 = "roCk"
// let test2 = "ROCK"

// console.log(playRound(test1, test2))
