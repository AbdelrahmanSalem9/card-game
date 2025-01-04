import { GAME_SETTINGS } from "./gameSettings.js";
import { startGame, resetGame, resetBoard } from "./gameController.js";

window.sharedState = window.sharedState || {};

const resetBtn = document.querySelector(".restart-btn");
resetBtn.addEventListener("click", () => {
  resetBoard();
  resetGame();
});

startGame(GAME_SETTINGS.easy);
