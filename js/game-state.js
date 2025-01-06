import { gameEvents } from "./game-events.js";

export let gameState = {
  solvedCards: [],
  score: 0,

  updateScore: function (newScore = this.score + 1) {
    this.score = newScore;
    gameEvents.updateScoreBar();
  },

  reset: function () {
    this.solvedCards = [];
    this.updateScore(0);
  },
};
