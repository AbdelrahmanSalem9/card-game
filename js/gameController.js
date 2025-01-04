import { generateCards } from "./cardFunctions.js";
import { generateRandomValues } from "./utils.js";

// const cards = document.querySelectorAll(".card");

export function startGame(settings) {
  const { cardCount } = settings;
  window.sharedState.solvedCards = [];
  const cardContainer = document.querySelector(".card-container");
  const cardElements = generateCards(cardCount);
  cardElements.forEach((element) => cardContainer.appendChild(element));
}

export function updateScore(newScore) {
  const scoreLabel = document.querySelector(".score");
  scoreLabel.textContent =
    newScore || window.sharedState.solvedCards.length / 2;
}

export function resetGame() {
  window.sharedState.solvedCards = [];
  updateScore(0);
}

export function resetBoard() {
  const cardElements = document.querySelectorAll(".card");
  const cardsNumber = generateRandomValues(cardElements.length);
  cardElements.forEach((card, index) => {
    card.textContent = cardsNumber[index];
    card.dataset.value = cardsNumber[index];
    card.classList.remove("flipped", "solved");
  });
}

function clearBoard() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
}

export function changeDifficulty(settings) {
  clearBoard();
  resetGame();
  startGame(settings);
}
