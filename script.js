"use strict";
let player_score = 0;
let computer_score = 0;
let playerSelection;
let pCount = 0;
let cCount = 0;
const options = ["rock", "paper", "scissors"];
const text = document.getElementById("text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const playAgain = document.getElementById("playAgain");
cScore.textContent = cCount;
pScore.textContent = pCount;
playAgain.textContent = "";
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    player_score++;
    pCount++;
    pScore.textContent = pCount;
    cScore.textContent = cCount;
    text.textContent = `You Win! You chose ${playerSelection}, Computer chose ${computerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computer_score++;
    cCount++;
    cScore.textContent = cCount;
    pScore.textContent = pCount;
    text.textContent = `Computer Wins! You chose ${playerSelection}, Computer chose ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    text.textContent = `It's a Tie! You chose ${playerSelection}, Computer chose ${computerSelection}.`;
    cScore.textContent = cCount;
    pScore.textContent = pCount;
  } else {
    console.log(`ERROR`);
  }
}
let round = 0;
function game() {
  if (player_score < 5 && computer_score < 5) {
    for (let i = 0; i === 0; i++) {
      playRound(playerSelection, getComputerChoice());
      round++;
    }
  }
  if (computer_score === 5) {
    text.textContent = "Computer wins the game!";
    playAgain.textContent = "Play Again?";
  } else if (player_score === 5) {
    text.textContent = "Player wins the game!";
    playAgain.textContent = "Play Again?";
  }
}
button1.addEventListener("click", function () {
  playerSelection = "rock";
  game();
});
button2.addEventListener("click", function () {
  playerSelection = "paper";
  game();
});
button3.addEventListener("click", function () {
  playerSelection = "scissors";
  game();
});

playAgain.addEventListener("click", function () {
  player_score = 0;
  computer_score = 0;
  cCount = 0;
  pCount = 0;
  cScore.textContent = cCount;
  pScore.textContent = pCount;
  text.textContent = "";
  playAgain.textContent = "";
});
let computerSelection = getComputerChoice();
