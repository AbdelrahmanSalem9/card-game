import { gameEvents } from "./game-events.js";

export let gameState = {
  solvedCards: [],
  score: 0,
  timer: null,

  updateScore: function (newScore = this.score + 1) {
    this.score = newScore;
    gameEvents.updateScoreBar();
  },

  startTimer: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = gameEvents.startTimer();
  },

  reset: function () {
    this.solvedCards = [];
    this.updateScore(0);
    this.startTimer();
  },
};
