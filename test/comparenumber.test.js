// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('The Guessed number (5), being less than the actual number(7), should return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    const guess = 5;
    const correctNumber = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('The Guessed number (25), being more than the actual number(6), should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const guess = 25;
    const correctNumber = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('The Guessed number (44), being the same as the actual number(44), should return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const guess = 44;
    const correctNumber = 44;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
