let playerWins = 0;
let computerWins = 0;
const winLimit = 5;

const getComputerChoice = () => {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};

const determineWinner = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        playerWins++;
        return "You win this round!";
    } else {
        computerWins++;
        return "Computer wins this round!";
    }
};

const checkForWinner = () => {
    if (playerWins === winLimit) {
        return "Congratulations! You win the game!";
    } else if (computerWins === winLimit) {
        return "The computer wins the game! Please try again.";
    }
    return null;
};

const buttons = document.querySelectorAll('button');
const selectedItems = document.getElementById("selectedItems");
const resultParagraph = document.querySelector(".result");
const scoreParagraph = document.getElementById("score");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (playerWins < winLimit && computerWins < winLimit) {
            const humanChoice = button.value;
            const computerChoice = getComputerChoice();

            selectedItems.textContent = `You selected: ${humanChoice}, Computer selected: ${computerChoice}`;

            const result = determineWinner(humanChoice, computerChoice);
            resultParagraph.textContent = result;

            scoreParagraph.textContent = `Player: ${playerWins}, Computer: ${computerWins}`;

            const finalResult = checkForWinner();
            if (finalResult) {
                resultParagraph.textContent = finalResult;
                buttons.forEach(btn => btn.disabled = true); // Disable buttons after game ends
            }
        }
    });
});