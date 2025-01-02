let flippedCards = [];
let solvedCards = [];

export function handleCardClick(card) {
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
  solvedCards.push(firstCard, secondCard);
}

function handleNoMatch(firstCard, secondCard) {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }, 500);
}
