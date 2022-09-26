
let hunanScore = 0
let computerScore = 0
let humanPick;
let computerPick;
const gameOptions = ["rock", "paper", "scissors"]

function computerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)]
}

function playRound(humanPick, computerPick) {
    if(humanPick.toLowerCase() == computerPick){
        return "It's a tie!"
    } else if(
        (humanPick.toLowerCase() == "rock" && computerPick == "scissors") ||
        (humanPick.toLowerCase() == "paper" && computerPick == "rock") ||
        (humanPick.toLowerCase() == "scissors" && computerPick == "paper")
    ){
        hunanScore++
        return `You win! ${humanPick.toLowerCase()} beats ${computerPick}`
    } else if(
        (computerPick == "rock" && humanPick.toLowerCase() == "scissors") ||
        (computerPick == "paper" && humanPick.toLowerCase() == "rock") ||
        (computerPick == "scissors" && humanPick.toLowerCase() == "paper")
    ){
        computerScore++
        return `You lose! ${computerPick} beats ${humanPick.toLowerCase()}`
    } else {
        return "Incorrect input"
    }
}

function game(){
    humanPick = prompt("choose your weapon")
    computerPick = computerChoice(gameOptions)
    console.log(playRound(humanPick, computerPick))
}

function gamePlay(){
    alert("Are you ready? Choose your weapon and save the world.")
    for (let i = 0; i < 5; i++){
    game()
    }

    if(hunanScore > computerScore){
        console.log(`You won! ${hunanScore} - ${computerScore}`)
    }else{
        console.log(`You loss! ${computerScore} - ${hunanScore}`)
        
    }
}

gamePlay()


