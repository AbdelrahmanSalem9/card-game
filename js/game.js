import { GAME_SETTINGS } from "./game-settings.js";
import {
  startGame,
  resetGame,
  resetBoard,
  changeDifficulty,
  showCongratsMessage,
} from "./game-controller.js";

window.sharedState = window.sharedState || {};

const resetBtn = document.querySelector(".restart-btn");
resetBtn.addEventListener("click", () => {
  resetBoard();
  resetGame();
});

const difficultyBtns = document.querySelectorAll(".difficulty-btn");
difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeDifficulty(GAME_SETTINGS[btn.id]);
  });
});

startGame(GAME_SETTINGS.easy);

document.addEventListener("allCardsSolved", () => {
  showCongratsMessage();

  const playAgainBtn = document.getElementById("playAgain");
  playAgainBtn.addEventListener("click", () => {
    congratsBox.classList.remove("show");
    changeDifficulty(GAME_SETTINGS.easy);
  });
});
