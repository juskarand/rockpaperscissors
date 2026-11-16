let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function updateScores() {
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
}

function win(userChoice, computerChoice) {
  userScore++;
  updateScores();
  result_p.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  updateScores();
  result_p.textContent = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
}

function draw(userChoice, computerChoice) {
  result_p.textContent = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
