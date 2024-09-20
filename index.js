const getComputerChoice = () => {
    const randomNumber = Math.random(); 

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let validChoices = ['rock', 'paper', 'scissors'];
    let choice = prompt("Choose rock, paper, or scissors");
    let humanChoice = choice.toLowerCase();

    if (validChoices.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice(); 
    }
}

const playGame = () => {
    let humanScore = 0, computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "You win this round!";
        } else {
            computerScore++;
            return "Computer wins this round!";
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        alert(result);
    }

    alert(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}


playGame();
