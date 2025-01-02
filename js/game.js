import { handleCardClick } from "./cardFunctions.js";

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => handleCardClick(card));
});
