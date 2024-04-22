import inquirer from 'inquirer';
const guessedNumber = Math.floor(Math.random() * 7) + 1;
// Tries Allowed
const maxTries = 6;
let triesLeft = maxTries;
// Start the Game
function startGame() {
    console.log('Welcome to the Number Guessing Game!');
    console.log('You have 6 tries to guess the correct number between 1 and 7.\n');
    function guessingGame() {
        inquirer
            .prompt({
            type: 'input',
            name: 'guess',
            message: `Take a guess (${triesLeft} tries left):`,
        })
            .then((answer) => {
            const guess = parseInt(answer.guess);
            if (guess < guessedNumber) {
                console.log('Your guess is too low.');
            }
            else if (guess > guessedNumber) {
                console.log('Your guess is too high.');
            }
            else {
                console.log(`Congrats! You guessed it in the ${maxTries - triesLeft + 1} try.`);
                return;
            }
            triesLeft--;
            if (triesLeft > 0) {
                guessingGame();
            }
            else {
                console.log(`Sorry, you've run out of tries. The correct number was ${guessedNumber}.`);
            }
        });
    }
    guessingGame();
}
startGame();
//# sourceMappingURL=index.js.map