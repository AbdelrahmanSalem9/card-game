import { generateCards } from "./cardFunctions.js";
import { getCardIcon } from "./icons.js";
import { generateRandomValues } from "./utils.js";

export function startGame(settings) {
  const { cardCount, unflipTime } = settings;
  window.sharedState.cardCount = cardCount;
  window.sharedState.unflipTime = unflipTime;
  window.sharedState.solvedCards = [];
  updateScore(0);
  const cardContainer = document.querySelector(".card-container");
  const cardElements = generateCards(cardCount);
  cardElements.forEach((element) => cardContainer.appendChild(element));
}

export function updateScore(newScore) {
  const scoreBar = document.querySelector(".score");
  scoreBar.textContent = `${
    newScore || window.sharedState.solvedCards.length / 2
  }/${window.sharedState.cardCount / 2}`;
  updateProgressBar(scoreBar);
}

function updateProgressBar(scoreBar) {
  const progress =
    (window.sharedState.solvedCards.length / window.sharedState.cardCount) *
    100;
  scoreBar.style.width = `${progress}%`;
}

export function resetGame() {
  window.sharedState.solvedCards = [];
  updateScore(0);
}

export function resetBoard() {
  const cardElements = document.querySelectorAll(".card");
  const cardsNumber = generateRandomValues(cardElements.length);
  cardElements.forEach((card) => {
    const value = cardsNumber.pop();
    card.classList.remove("flipped", "solved");
    card.childNodes[0].classList.remove("show-icon");
    card.childNodes[0].textContent = getCardIcon(value);
    card.dataset.value = value;
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

export function showCongratsMessage() {
  const congratsBox = document.getElementById("congratsBox");
  congratsBox.classList.add("show");
}
