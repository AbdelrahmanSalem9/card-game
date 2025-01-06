import { GAME_SETTINGS } from "./game-settings.js";
import { gameEvents } from "./game-events.js";
import { startGame } from "./game-controller.js";

const DEFAULT_SETTINGS = GAME_SETTINGS.medium;

gameEvents.resetGameListener();
gameEvents.changeDifficultyListener(GAME_SETTINGS);
gameEvents.allCardsSolvedListener();

startGame(DEFAULT_SETTINGS);
