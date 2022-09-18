
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

console.log(getComputerChoise());
