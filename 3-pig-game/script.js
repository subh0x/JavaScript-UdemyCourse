'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // More Performant Compared to querySelector('#...')
const currentScore0El = document.getElementById('current--0'); // More Performant
const currentScore1El = document.getElementById('current--1'); // More Performant
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

function initializeGame() {
    // Initialize player scores to 0:
    score0El.textContent = 0;
    score1El.textContent = 0;
    // Also current Scores to 0:
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    // Hide the Dice on Starting a Game:
    diceEl.classList.add('hidden');

    if (player0El.classList.contains('player--winner')) {
        player0El.classList.remove('player--winner');
    }
    else if (player0El.classList.contains('player--winner')) {
        player1El.classList.remove('player--winner');
    }
};

initializeGame();

// Roll Dice Button:
btnRollDice.addEventListener('click', function () {
    let diceRolledVal = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceRolledVal}.png`;

    if (diceEl.classList.contains('hidden')) {
        diceEl.classList.remove('hidden');
    }

    // Update current Score for the Active Player:

    if (Number(diceRolledVal) === 1) {

        // Active Player's currentScore becomes 0 & Switch Active player 
        if (player0El.classList.contains('player--active')) {
            currentScore0El.textContent = 0;
            // Switch active players:
            player0El.classList.remove('player--active');
            player1El.classList.add('player--active');
        }
        else if (player1El.classList.contains('player--active')) {
            currentScore1El.textContent = 0;
            // Switch active players:
            player1El.classList.remove('player--active');
            player0El.classList.add('player--active');
        }
    }
    else {
        // Update current score of active player by adding diceRollValue for the active player:
        if (player0El.classList.contains('player--active')) {
            currentScore0El.textContent = Number(currentScore0El.textContent) + diceRolledVal;
        }
        else if (player1El.classList.contains('player--active')) {
            currentScore1El.textContent = Number(currentScore1El.textContent) + diceRolledVal;
        }
    }
});

// TODO: Code needs refactoring.
btnHold.addEventListener('click', function () {

    if (!diceEl.classList.contains('hidden')) {
        diceEl.classList.add('hidden');
    }

    if (player0El.classList.contains('player--active')) {
        score0El.textContent = Number(score0El.textContent) + Number(currentScore0El.textContent);
        currentScore0El.textContent = 0;
        if (Number(score0El.textContent) < 100) {
            // Switch active players:
            player0El.classList.remove('player--active');
            player1El.classList.add('player--active');
        }
        else {
            player0El.classList.add('player--winner');
        }
    }
    else if (player1El.classList.contains('player--active')) {
        score1El.textContent = Number(score1El.textContent) + Number(currentScore1El.textContent);
        currentScore1El.textContent = 0;

        // Switch active players:
        if (Number(score1El.textContent) < 100) {
            // Switch active players:
            player1El.classList.remove('player--active');
            player0El.classList.add('player--active');
        }
        else {
            player1El.classList.add('player--winner');
        }
    }

});

btnNew.addEventListener('click', function () {
    initializeGame();
});