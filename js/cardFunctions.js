import { updateScore } from "./gameController.js";
import { shuffle, generateRandomValues } from "./utils.js";

let flippedCards = [];

function handleCardClick(card) {
  if (card.classList.contains("flipped")) {
    unflipCard(card);
  } else {
    flipCard(card);
  }
}

function flipCard(card) {
  card.classList.add("flipped");
  flippedCards.push(card);
  checkMatch();
}

function unflipCard(card) {
  card.classList.remove("flipped");
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
  window.sharedState.solvedCards.push(firstCard, secondCard);
  updateScore();
}

function handleNoMatch(firstCard, secondCard) {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }, 500);
}

export function generateCards(cardCount) {
  return generateRandomValues(cardCount).map((value) =>
    createCardElement(value, cardCount)
  );
}

function createCardElement(value, cardCount) {
  const card = document.createElement("span");
  card.classList.add("card");
  card.textContent = value;
  card.style.height = `calc(90% / ${cardCount / 4} )`;
  card.dataset.value = value;
  card.addEventListener("click", () => handleCardClick(card));
  return card;
}
