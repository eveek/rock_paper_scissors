const ruleModal = document.querySelector(".rule-modal")
const coverModal = document.querySelector(".modal-cover")
const closeModal = document.querySelector(".modal-close")
const ruleButton = document.querySelector(".rule")


let hunanScore = 0;
let computerScore = 0;
let humanPick;
let computerPick;
const gameOptions = ["rock", "paper", "scissors"];

function computerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

function playRound(humanPick, computerPick) {
    if(humanPick.toLowerCase() == computerPick){
        return "It's a tie!";
    } else if(
        (humanPick.toLowerCase() == "rock" && computerPick == "scissors") ||
        (humanPick.toLowerCase() == "paper" && computerPick == "rock") ||
        (humanPick.toLowerCase() == "scissors" && computerPick == "paper")
    ){
        hunanScore++;
        return `You win! ${humanPick.toLowerCase()} beats ${computerPick}`;
    } else if(
        (computerPick == "rock" && humanPick.toLowerCase() == "scissors") ||
        (computerPick == "paper" && humanPick.toLowerCase() == "rock") ||
        (computerPick == "scissors" && humanPick.toLowerCase() == "paper")
    ){
        computerScore++;
        return `You lose! ${computerPick} beats ${humanPick.toLowerCase()}`;
    } else {
        return "Incorrect input";
    }
}

function game(){
    humanPick = prompt("choose your weapon");
    computerPick = computerChoice(gameOptions);
    console.log(playRound(humanPick, computerPick));
}

function playGame(){
    alert("Are you ready? Choose your weapon and save the world.");
    for (let i = 0; i < 5; i++){
    game();
    }

    if(hunanScore > computerScore){
        console.log(`You won! ${hunanScore} - ${computerScore}`);
    }else{
        console.log(`You loss! ${computerScore} - ${hunanScore}`);
        
    }
}

// playGame();




// MODAL SECTION
ruleButton.addEventListener("click", ()=>{
    ruleModal.classList.add("show")
    coverModal.classList.add("show")
})

closeModal.addEventListener("click", ()=>{
    ruleModal.classList.remove("show")
    coverModal.classList.remove("show")
})

coverModal.addEventListener("click", ()=>{
    ruleModal.classList.remove("show")
    coverModal.classList.remove("show")
})