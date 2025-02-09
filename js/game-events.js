import {
  resetBoard,
  changeDifficulty,
  showCongratsMessage,
} from "./game-controller.js";

import { gameState } from "./game-state.js";

export const gameEvents = {
  resetGameListener: function () {
    const resetBtn = document.querySelector(".restart-btn");
    resetBtn.addEventListener("click", () => {
      gameState.reset();
      resetBoard();
    });
  },

  changeDifficultyListener: function (gameSettings) {
    const difficultyBtns = document.querySelectorAll(".difficulty-btn");
    difficultyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        changeDifficulty(gameSettings[btn.id]);
      });
    });
  },

  allCardsSolvedListener: function () {
    document.addEventListener("allCardsSolved", () => {
      showCongratsMessage();

      const playAgainBtn = document.getElementById("playAgain");
      playAgainBtn.addEventListener("click", () => {
        congratsBox.classList.remove("show");
        gameState.reset();
        resetBoard();
      });
    });
  },

  updateScoreBar: function () {
    const scoreBar = document.querySelector(".score");
    scoreBar.textContent = `${gameState.score}/${gameState.cardCount / 2}`;
    const progress = ((2 * gameState.score) / gameState.cardCount) * 100;
    scoreBar.style.width = `${progress}%`;
  },

  startTimer: function () {
    let timerDisplay = document.getElementById("timer-display");
    let seconds = 0;
    let minutes = 0;
    return setInterval(function () {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      let formattedTime =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
      timerDisplay.textContent = formattedTime;
    }, 1000);
  },
};
