"use strict";
const options = ["rock", "paper", "scissors"];
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
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computer_score++;
  } else if (playerSelection === computerSelection) {
  }
}
let round = 0;
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("choice:").toLowerCase(), getComputerChoice());
    round++;
  }
  if (player_score > computer_score) {
    console.log(`You won: ${player_score} - ${computer_score}`);
  }
  if (player_score < computer_score) {
    console.log(`You lost: ${computer_score} - ${player_score}`);
  }
}
let player_score = 0;
let computer_score = 0;
const playerSelection = prompt("choice:").toLowerCase();
let computerSelection = getComputerChoice();
game();
