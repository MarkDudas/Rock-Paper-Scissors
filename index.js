const getComputerChoice = () => {
    let randomNumber = Math.random();

    if (randomNumber < 0.33){
        return "rock"
    }
    else if (randomNumber < 0.66){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

const getHumanChoice = () => {
    let validChoice = ['rock','paper','scissors']
    let choice = prompt("Enter rock paper or scissors")
    let humanChoice = choice.toLowerCase();

    if ( validChoice.includes(humanChoice)){
        return humanChoice
    }
    else {
        alert("Invalid choice please select rock paper or scissors")
        getHumanChoice()
    }
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === computerChoice){
            return "its a tie"
        }
        else if (
            (humanChoice === 'rock' && computerChoice === 'scissors')  ||
            (humanChoice === 'paper' && computerChoice === 'rock')  ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ){
            humanScore++
            return "You win this round!"
        }
        else{
            computerScore++
            return "Computer win this round"
        }

    }
    for(i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        alert(result)

    }
 
    alert(`Final score ${humanScore} - ${computerScore}`)
   
}

playGame()