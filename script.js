'use script';

// Selecting elements

// const score1 = document.querySelector('#score--0');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Rolling dice functionality
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice

  // 3. Check for rolled 1
});
