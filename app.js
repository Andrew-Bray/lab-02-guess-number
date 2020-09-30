// import functions and grab DOM elements
import {resetGame, tryAgain, canIPlayStill, amIRight, compareNumbers } from './utils.js';

const guessButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-button');
// initialize state
let guessesLeft = 4;
const secretNumber = Math.floor(Math.random() * 20);

// displays the secretNumber in the console
console.log(secretNumber);

//displays the effectiveness of the compareNumbers function
console.log(compareNumbers(44, 2));
// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    guessesLeft--;
    amIRight(secretNumber, guessesLeft);
});

resetButton.addEventListener('click', () => {
    resetGame(guessesLeft);
}
);