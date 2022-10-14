'use strict';

const domSecretNumber = document.querySelector('.number');
const input = document.querySelector('.guess');
const button = document.querySelector('.check');
const domScore = document.querySelector('.score');
const domhighScore = document.querySelector('.highscore');
const again = document.querySelector('.again');

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

button.addEventListener('click', function () {
  const guess = Number(input.value);

  if (!guess) {
    //When there is no input
    displayMessage('No number!😒'); //win + . for emoji
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!👇' : 'Too low!☝');
      score--;
      domScore.textContent = score;
    } else {
      displayMessage('You lost the game!🤦‍♂️ ');
      domScore.textContent = 0;
    }
  } else if (guess === secretNumber) {
    //When player wins
    displayMessage('Correct number!🎉');

    domSecretNumber.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      domhighScore.textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    domSecretNumber.style.width = '30rem';
  }
});
//Restarting the game
again.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  domSecretNumber.style.width = '15rem';

  displayMessage('Guess the number... ');

  secretNumber = generateSecretNumber();
  score = 20;
  domScore.textContent = score;
  input.value = '';
  domSecretNumber.textContent = '?';
});
