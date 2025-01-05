# Memory Card Game

A fun and interactive memory card game designed to test and improve your memory skills. Match pairs of cards and challenge yourself with three levels of difficulty: Easy, Medium, and Hard.

## Features

- **Dynamic Difficulty Levels**: Choose between Easy, Medium, and Hard modes.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Interactive Animations**: Smooth card flip animations and a progress bar to track your progress.
- **Game Completion Celebration**: A stylish and animated congratulatory message appears when you solve all the cards.
- **Theme-Based Styling**: The game uses a clean and engaging theme with customized colors and a cohesive layout.

## Technologies Used

- **HTML5**: Structure of the game.
- **CSS3**: For styling, animations, and responsiveness.
- **JavaScript**: Core logic and interactivity.

## How to Play

1. Choose a difficulty level from the top menu (Easy, Medium, or Hard).
2. Click on the cards to flip them and reveal their icons.
3. Match pairs of cards with the same icons.
4. Complete the game to see a congratulatory message!

## Project Structure

```plaintext
📂 Memory-Card-Game
├── 📂 css
│   └── style.css        # Game styling
├── 📂 js
│   ├── game.js         # Main game logic
│   ├── cardFunctions.js # Card-related functions
├── index.html           # Main HTML file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memory-card-game.git
   ```

2. Open the `index.html` file in your favorite web browser.

## Customization

- To customize the icons:
  - Edit the `createCardElement` function in `cardFunctions.js` to use your desired icons.
- Modify the color scheme in `style.css` to fit your preferences.

## Roadmap

- Add a timer to challenge players to complete the game within a specific time.
- Implement a leaderboard to track high scores.
- Add sound effects for card flips and matches.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

- Icons sourced from [FontAwesome](https://fontawesome.com/).
- Background gradients inspired by [CSS Gradient](https://cssgradient.io/).
- Developed with ❤️ by [Your Name].