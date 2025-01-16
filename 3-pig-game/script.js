'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // More Performant
const diceEl = document.querySelector('.dice');

// Initialize player scores to 0:
score0El.textContent = 0;
score1El.textContent = 0;

// Hide the Dice on Starting a Game:
diceEl.classList.add('hidden');