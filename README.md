# Fred Fitxe Fatch with JavaScript

## Intro
This project is a simple implementation of the classic Fitxe Fatch game only using HTML, CSS, JavaScript and Tailwind. The goal is to align three simbols (X or O) in the 3x3 grid. The project was developed to practice JavaScript programming skills and DOM manipulation, and it serves as a good introduction to basic game development with JavaScript.


## Environment Setup

Clone this repository:

To initialize the project you must access the `vite-project`folder
### `cd vite-project`

## In the project directory, you can run:

### `npm run dev`

## Features
- An interactive interface that lets players click on cells to try to win.
- Allows two players to play alternately.
- The game automatically checks for a win condition after each turn, accounting for rows, columns, and diagonals, or even when no one won the match.
- After a win or draw, the game can be reset for a new round.
- The player would be able to chang their ID's to even cool names.


## Code Structure
- index.html: Contains the basic game structure and board elements.
- index.css/ Win.css/ player.css: Defines the root and body visual style and appearance.
- main.jsx: Creates a root that rooms the App.jsx.
- App.jsx: Houses the main game logic, functionality, and also rooms the Win.jsx and DisplayPlayers.jsx.
- DisplayPlayers.jsx: Manages the turn control received on the props.
- WIN.jsx: Manages the win detection, and controls the try again button.


## Technologies Used
- HTML: Provides the basic structure for the game.
- Tailwind and CSS: Enhances styling with utility-first CSS for a modern and responsive interface.
- JavaScript: Implements the game logic, including win/draw detection, and turn control.


## Game Logic
The game starts with an empty board, and player "X" always goes first. After each move, the turn switches to the other player. After every move, JavaScript checks all possible win combinations. If a win condition is met, the game ends with a victory message. If all cells are filled with no winner, the game displays a draw message. A button lets players reset the game, clearing the board for a new match.


# Potential Improvements
- Implement a basic AI mode that allows single-plays.
- Let players choose their symbols before starting.
- Add a win counter to track each player's score.
