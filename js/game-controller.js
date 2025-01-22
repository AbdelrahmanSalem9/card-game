import { generateCards } from "./card-functions.js";
import { getCardIcon } from "./icons.js";
import { generateRandomValues, loadFlipSound } from "./utils.js";
import { gameState } from "./game-state.js";

export function startGame(settings) {
  const { cardCount, unflipTime } = settings;
  gameState.cardCount = cardCount;
  gameState.unflipTime = unflipTime;
  gameState.updateScore(0);
  gameState.startTimer()
  loadFlipSound();
  const cardContainer = document.querySelector(".card-container");
  const cardElements = generateCards();
  cardElements.forEach((element) => cardContainer.appendChild(element));
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
  gameState.reset();
  clearBoard();
  startGame(settings);
}

export function showCongratsMessage() {
  const congratsBox = document.getElementById("congratsBox");
  congratsBox.classList.add("show");
}
