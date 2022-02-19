let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget(): return random number between 0 and 9

const generateTarget = () => Math.floor(Math.random() * 9) + 1;

//test
// console.log(generateTarget());
// console.log(generateTarget());
// console.log(generateTarget());

//compareGuesses(humanGuess, computerGuess, secretNumber):
//return True if humanGuess is close to secretNumber else False

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    if (Math.abs(secretNumber - humanGuess) > Math.abs(secretNumber - computerGuess)) {
        return false;
    } else {
        return true;
    }
}

//test
// console.log(compareGuesses(1, 9, 2));
// console.log(compareGuesses(1, 9, 7));
// console.log(compareGuesses(1, 3, 2));

//updateScore(winner): increase humanScore if human win else increase computerScore

const updateScore = winner => {
    winner === 'human' ? humanScore += 1 : computerScore += 1;
}

//test
// console.log(updateScore('human'));
// console.log(updateScore('human'));
// console.log(humanScore);
// console.log(updateScore('computer'));
// console.log(computerScore);

//advanceRound(): increase the currentRoundNumber

const advanceRound = () => {
    currentRoundNumber += 1;
}

//test
// console.log(advanceRound());
// console.log(advanceRound());
// console.log(currentRoundNumber);
