
const myGuess = document.getElementById('my-guess');
const coaching = document.getElementById('coaching');
const remainingIndicator = document.getElementById('remaining-indicator');
const resetButton = document.getElementById('reset-button');


export function resetGame(guessesLeft) {
    coaching.textContent = ' ';
    remainingIndicator.textContent = ' ';
    resetButton.classList.add('hidden');
    guessesLeft = 4;
    // code isn't running correctly
    //using my nuclear solution below as a temporary fix
    window.location.reload();
} 

export function amIRight(secretNumber, guessesLeft) {
    const myGuessAsNum = myGuess.valueAsNumber;
    if (myGuessAsNum === secretNumber) {
        coaching.textContent = 'You did it, you wizard!';
        remainingIndicator.textContent = `Feels vindicating, doesn't it? One more time?`;
        resetButton.classList.remove('hidden');
    } else {
        canIPlayStill(guessesLeft, myGuessAsNum, secretNumber);
    }
}

export function canIPlayStill(guessesLeft, myGuessAsNum, secretNumber) {
    if (guessesLeft <= 0) {
        coaching.textContent = 'No big deal. you just couldn\'t get this off the ground, could you?';
        remainingIndicator.textContent = 'Perhaps another try?';
        resetButton.classList.remove('hidden');
        return guessesLeft = 4; 
    } else {
        tryAgain(guessesLeft, myGuessAsNum, secretNumber);
    }
}

export function tryAgain(guessesLeft, myGuessAsNum, secretNumber) {
    if (myGuessAsNum < secretNumber && myGuessAsNum >= 0) {
        coaching.textContent = 'It\'s higher than you think, buddy.';
        remainingIndicator.textContent = `You have ${guessesLeft} left. Choose wisely.`;
    } else if (myGuessAsNum > secretNumber && myGuessAsNum <= 20) {
        coaching.textContent = 'It\'s lower than you think, champ.';
        remainingIndicator.textContent = `You have ${guessesLeft} left. Choose wisely.`;
    } else { 
        coaching.textContent = 'Stick to the rules, you Rebel';
        remainingIndicator.textContent = `You have ${guessesLeft} left. Choose wisely.`;
    } 
}
// I hadn't used the compare numbers function within the elements of my main code. A lapse on my part. Nevertheless, here is the compareNumbers function.
export function compareNumbers(guess, correctNumber) {
    if (guess < correctNumber) {
        return -1;
    } if (guess > correctNumber) {
        return 1;
    } if (guess === correctNumber) {
        return 0;
    }
}