import { GAME_SETTINGS } from "./gameSettings.js";
import { startGame, resetGame, resetBoard, changeDifficulty} from "./gameController.js";

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
