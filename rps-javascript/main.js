function computerPlay(){
    options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors") console.log("You Win!");
    else if(playerSelection == "paper" && computerSelection == "rock") console.log("You Win!");   
    else if (playerSelection == "scissors" && computerSelection == "paper") console.log("You Win!");

    else if(playerSelection == "scissors" && computerSelection == "rock") console.log("You Lose!");
    else if(playerSelection == "rock" && computerSelection == "paper") console.log("You Lose!");   
    else if (playerSelection == "paper" && computerSelection == "scissors") console.log("You Lose!");

    else console.log("Tie!");
}

const playerSelection = prompt("rock paper or scissors?").toLowerCase();
const computerSelection = computerPlay().toLowerCase();

console.log(playerSelection, computerSelection);

playRound(playerSelection, computerSelection);