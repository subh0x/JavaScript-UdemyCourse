'use strict';

// Generate the Actual Number:
let actualNumber = Math.floor(Math.random() * 20) + 1;

console.log(actualNumber);

let currentScore = 20;
document.querySelector('.score').textContent = currentScore;
let currentHighScore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No number!";
    }
    else {
        if (currentScore > 1) {
            if (guess > actualNumber) {
                penaltyGuess('📈 Too High!');
            }
            else if (guess < actualNumber) {
                penaltyGuess('📉 Too Low!');
            }
            else if (Number(guess) === actualNumber) {
                document.querySelector('.number').textContent = actualNumber;
                document.querySelector('.number').style.width = '25rem';
                document.querySelector('.message').textContent = '🎉 Correct Number!';
                // Set the Background Color to Green.
                document.querySelector('body').style.backgroundColor = '#60b347';
            }
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

});

function penaltyGuess(penaltyMessage) {
    document.querySelector('.message').textContent = penaltyMessage;
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
};

// Reset the game:
document.querySelector('.again').addEventListener('click', function () {
    // Store the Previous score as HighScore if Greater than Highscore
    currentHighScore = Math.max(currentScore, currentHighScore);
    document.querySelector('.highscore').textContent = currentHighScore;
    actualNumber = Math.floor(Math.random() * 20) + 1; // Regenerate the number
    document.querySelector('body').style.backgroundColor = '#222'; // Reset Background Color
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "Start guessing...";
    currentScore = 20; // Reset Current Score
    document.querySelector('.score').textContent = currentScore;
});