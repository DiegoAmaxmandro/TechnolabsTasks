

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || `bomb`) {
        return userInput;
    } else {
        return "Choice must be either `rock`, `paper`, or `scissors`";
    }
}

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
const determineWinner = (userChoice, computerChoice) =>{
    console.log(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);

    if(userChoice === computerChoice){
        return console.log("This was a tie, please try again");
    }else if(userChoice === `rock` && computerChoice === `paper` ||
             userChoice === `paper` && computerChoice === `scissors` ||
             userChoice === `scissors` && computerChoice === `rock`){
        return console.log("The Computer won!!!");
    }else if(userChoice === `bomb`){
        return console.log("You won!!!");
    }
    else{
        return console.log("You won!!!");
    }

}

const playGame = ()=> {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    return determineWinner(userChoice, computerChoice);
    
}

playGame();

