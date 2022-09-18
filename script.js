
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
        return "You Win, rock beat scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win, paper beat rock"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win, scissors beat paper"
    } else {
        return `You Lose, ${computerSelection} beat ${playerSelection}`
    }
}
let playerChoise = prompt("Choise rock, paper or scissors").toLowerCase()
console.log(playRound(playerChoise,getComputerChoise()));
