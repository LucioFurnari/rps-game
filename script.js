
function getComputerChoise () {
    let randomNumber = Math.floor(Math.random() * 30)+1
    let result;
    switch (true) {
        case (randomNumber >= 0 && randomNumber < 10):
            result = "rock";
            break;
        case (randomNumber >= 10 && randomNumber < 20):
            result = "paper";
            break;
        case (randomNumber >= 20 && randomNumber <= 30):
            result = "scissors";
            break;
        default:
            break;
    }
    return result
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Empate"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return "You Win, rock beat scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return "You Win, paper beat rock"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You Win, scissors beat paper"
    } else {
        computerScore += 1;
        return `You Lose, ${computerSelection} beat ${playerSelection}`
    }
    
}

function game(){
    // let playerChoise = prompt("Choise rock, paper or scissors").toLowerCase()
    return (playRound(playerChoise,getComputerChoise()));  
}
const Buttons = document.querySelectorAll("button");
const scoreText = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;
Buttons.forEach(button => {
    button.addEventListener("click",(e) => {
        scoreText.textContent = playRound(e.target.id,getComputerChoise())
        if(playerScore >= 5) {
            console.log("Player Win");
        } else if(computerScore >= 5){
            console.log("Computer Win");
        }
    })
})
console.log(Buttons);

