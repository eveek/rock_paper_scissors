const ruleModal = document.querySelector(".rule-modal");
const coverModal = document.querySelector(".modal-cover");
const closeModal = document.querySelector(".modal-close");
const ruleButton = document.querySelector(".rule");

const playButtons = document.querySelectorAll(".play-btn");
const scoreDisplay = document.querySelector(".score-display");
const gamePickDisplay = document.querySelector(".game-pick-display");
const gameRoundkDisplay = document.querySelector(".game-round-display");
const youPick = document.querySelector(".you-pick");
const housePick = document.querySelector(".computer-pick");
const roundStatus = document.querySelector(".round-status");
const roundStatusPara = document.querySelector(".round-status-paragraph");
const repeatButton = document.querySelector(".repeat-btn");


let humanScore = 0;
let computerScore = 0;
let humanPick;
let computerPick;
const gameOptions = ["rock", "paper", "scissors"];


function computerChoice(gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

repeatButton.addEventListener("click", ()=> {
    gamePickDisplay.classList.remove("disappear");
    gameRoundkDisplay.classList.remove("appear");
})


function playRound(humanPick, computerPick) {
    if(humanPick.toLowerCase() == computerPick){
        roundStatus.textContent = "IT'S A TIE!";
        roundStatusPara.textContent = ""
    } else if(
        (humanPick.toLowerCase() == "rock" && computerPick == "scissors") ||
        (humanPick.toLowerCase() == "paper" && computerPick == "rock") ||
        (humanPick.toLowerCase() == "scissors" && computerPick == "paper")
        ){
            humanScore++;
            scoreDisplay.textContent = `${humanScore}:${computerScore}`;
            roundStatus.textContent = "YOU WIN!";
            roundStatusPara.textContent = `${humanPick.toUpperCase()} BEATS ${computerPick.toUpperCase()}`;
    } else if(
        (computerPick == "rock" && humanPick.toLowerCase() == "scissors") ||
        (computerPick == "paper" && humanPick.toLowerCase() == "rock") ||
        (computerPick == "scissors" && humanPick.toLowerCase() == "paper")
        ){
            computerScore++;
            scoreDisplay.textContent = `${humanScore}:${computerScore}`;
            roundStatus.textContent = "YOU LOSE!";
            roundStatusPara.textContent = `${computerPick.toUpperCase()} BEATS ${humanPick.toUpperCase()}`;
    } else {
        return "Incorrect input";
    }
}

function updateRoundDisplay(humanPick, computerPick){
    youPick.className = "choice-btn";
    housePick.className = "choice-btn";

    youPick.classList.add(`choice-${humanPick}`);
    youPick.innerHTML= ""
    youPick.innerHTML= `<div class="choice-btn-inner"><img src="./images/icon-${humanPick}.svg" alt=""></div>`

    housePick.classList.add(`choice-${computerPick}`);
    housePick.innerHTML= ""
    housePick.innerHTML= `<div class="choice-btn-inner"><img src="./images/icon-${computerPick}.svg" alt=""></div>`
}

function game(playeSelection){
    humanPick = playeSelection
    computerPick = computerChoice(gameOptions);
    playRound(humanPick, computerPick);
    updateRoundDisplay(humanPick, computerPick);
}

playButtons.forEach(playButton => playButton.addEventListener("click", () =>{
    let playeSelection = playButton.attributes.value.textContent
    game(playeSelection)

    gamePickDisplay.classList.add("disappear");
    gameRoundkDisplay.classList.add("appear");

    if(computerScore == 5 || humanScore == 5){
        if(humanScore > computerScore){
        console.log(`You won! ${humanScore} - ${computerScore}`);
    }else{
        console.log(`You loss! ${computerScore} - ${humanScore}`);
    }
    }
}))






// RULE MODAL SECTION
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