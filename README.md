# Memory Card Game

A fun and interactive memory card game designed to test and improve your memory skills. Match pairs of cards and challenge yourself with three levels of difficulty: Easy, Medium, and Hard.

## Features

- **Dynamic Difficulty Levels**: Choose between Easy, Medium, and Hard modes.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Interactive Animations**: Smooth card flip animations and a progress bar to track your progress.
- **Game Completion Celebration**: A stylish and animated congratulatory message appears when you solve all the cards.
- **Theme-Based Styling**: The game uses a clean and engaging theme with customized colors.

## Technologies Used

- **HTML5**: Structure of the game.
- **CSS3**: For styling, animations, and responsiveness.
- **JavaScript**: Core logic and interactivity.

## How to Play

1. Choose a difficulty level from the top menu (Easy, Medium, or Hard).
2. Click on the cards to flip them and reveal their icons.
3. Match pairs of cards with the same icons.
4. Complete all pairs to win the game.

## Project Structure

```plaintext
📂 Memory-Card-Game
├── 📂 css
|   ├── base.js            # Base game coloring theme and background pattern
|   ├── congrats.js        # wining message styling
│   └── style.css          # Game elements styling
├── 📂 js
│   ├── game.js            # User functionality interface
│   ├── game-controller.js # Game logic functions
|   ├── game-state.js      # Shared state object
|   ├── game-events.js     # Encapsulate all game events in one file
|   ├── card-functions.js  # Card-related functions
|   ├── utils.js           # helping functions
|   ├── game-settings.js   # Game pre-defined variables
|   ├── icons.js           # Cards pre-defined icons
├── index.html             # Main HTML file
├── README.md              # Project documentation
└── favicon.ico            # AI-Generated favicon
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/memory-card-game.git
   ```

2. Open the `index.html` file in your favorite web browser.

## Customization

- To customize the icons:
  - Edit `icons.js` to add/remove icons as you desire.
- To change styling theme
  - Modify `base.css` to fit your preferences.
- To change game setting (cards count or fliping time)
  - Change `GAME_SETTINGS` variable in `game-settings.js` to match you gaming expericence.

## Future Features

- Add a timer to challenge players to complete the game within a specific time.
- Implement a leaderboard to track high scores.
- Add sound effects for card flips and matches.
