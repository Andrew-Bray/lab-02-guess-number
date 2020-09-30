# lab-02-guess-number
Bugs as of 9-29:
 - still having issues getting the 'guessesLeft' variable to reset to 4 at the end of the game.
 - I had to use a window.location.reload to reset the page, which wasn't my first choice. i couldn't figure out how to get all of the parameters, including picking a new random number, to start over.
 - the code is, simply put, messy. I'm proud of the work I did, although I am eager to learn how I overlooked many potentially simpler answers. 





State: -number of guesses- begins at zero
        -when page loads, a random number between 1 and 20 is stored

View derived from state 

HTML Elements
    - independent content : instructions.
    - input - where the person can put in a number between one and 20.
    - button - 1) On click, the number of guesses increases by one. 2) on click the input is fed into the function
    -Output - telling them higher , lower or correct
    - output telling them how many more guresses
    Reset Button - on click reset game

    On button click: 
        1)increment the guesses in state. Update How many guesses are left in DOM.
            - if they have made four guesses tell them the game is over.
        2) receive the input number
            1)if the guess is below number, tell them to guess higher
            2) if the output is above the number, tell them to guess lower.
            3) if they put in any number out of the parameters, tell them to follow the darn rules, rebel.
            4) if they guess correctly, tell them they won, and end the game/ reset to the beginning
    1) reset button does just that.
