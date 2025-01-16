// node index.js rock, paper or scissors
const process = require("process");

const validOptions = ["rock", "paper", "scissors"];
const arguments = process.argv.slice(2);
const userChoice = arguments[0];
const computerChoice =
  validOptions[Math.floor(Math.random() * validOptions.length)];

const determineWinner = (playerInput, computerInput) => {
  if (playerInput === computerInput) {
    return "It's a tie!";
  }

  if (
    (playerInput === "rock" && computerInput === "scissors") ||
    (playerInput === "scissors" && computerInput === "paper") ||
    (playerInput === "paper" && computerInput === "rock")
  ) {
    return "Player wins!";
  }

  return "Computer wins!";
};

if (!validOptions.includes(userChoice)) {
  console.error("Invalid choice. Please choose rock, paper, or scissors.");
  return;
}

console.log(`User chose: ${userChoice}, Computer chose: ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
