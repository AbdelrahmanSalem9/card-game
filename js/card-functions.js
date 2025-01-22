import { generateRandomValues, playFlipSound } from "./utils.js";
import { getCardIcon } from "./icons.js";
import { gameState } from "./game-state.js";

let flippedCards = [];

function handleCardClick(card) {
  if (card.classList.contains("flipped")) {
    unflipCard(card);
  } else {
    flipCard(card);
  }
}

function flipCard(card) {
  playFlipSound();
  card.classList.add("flipped");
  card.childNodes[0].classList.add("show-icon");
  flippedCards.push(card);
  checkMatch();
}

function unflipCard(card) {
  playFlipSound();
  card.classList.remove("flipped");
  card.childNodes[0].classList.remove("show-icon");
  flippedCards.pop();
}

function checkMatch() {
  if (flippedCards.length === 2) {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.value === secondCard.dataset.value) {
      handleMatch(firstCard, secondCard);
    } else {
      handleNoMatch(firstCard, secondCard);
    }
    flippedCards.length = 0;
  }
}

function handleMatch(firstCard, secondCard) {
  firstCard.classList.add("solved");
  secondCard.classList.add("solved");
  gameState.solvedCards.push(firstCard, secondCard);
  gameState.updateScore();
  console.log("handleMatch done!");
  if (gameState.solvedCards.length === gameState.cardCount) {
    const event = new CustomEvent("allCardsSolved");
    document.dispatchEvent(event);
  }
}

function handleNoMatch(firstCard, secondCard) {
  setTimeout(() => {
    playFlipSound(2.5);
    firstCard.childNodes[0].classList.remove("show-icon");
    firstCard.classList.remove("flipped");
    secondCard.childNodes[0].classList.remove("show-icon");
    secondCard.classList.remove("flipped");
  }, gameState.unflipTime);
}

export function generateCards() {
  const cardCount = gameState.cardCount;
  return generateRandomValues(cardCount).map((value) =>
    createCardElement(value, cardCount)
  );
}

function createCardElement(value) {
  const cardCount = gameState.cardCount;
  const card = document.createElement("div");
  card.classList.add("card");
  const icon = document.createElement("span");
  icon.classList.add("card-icon");
  icon.textContent = getCardIcon(value);
  card.appendChild(icon);
  card.style.height = `calc(90% / ${cardCount / 4} )`;
  card.dataset.value = value;
  card.addEventListener("click", () => handleCardClick(card));
  return card;
}
