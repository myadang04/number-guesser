'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const inputEl = document.querySelector('.guess');
const buttonEl = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const buttonAgainEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
scoreEl.textContent = score;

const logicCheck = function () {
  if (inputEl.value === "") {
    messageEl.textContent = "No number!";
  } else {
    const guessNumber = Number(inputEl.value);

    if (guessNumber === secretNumber) {
      messageEl.textContent = "Correct Number";
      numberEl.textContent = secretNumber;
      bodyEl.style.backgroundColor = "#60b347";

      if (score > highscore) {
        highscore = score;
        highScoreEl.textContent = highscore;
      }
    } else {
      if (score > 1) {
        score -= 1;
        scoreEl.textContent = score;

        if (guessNumber > secretNumber) {
          messageEl.textContent = "Too High";
        } else {
          messageEl.textContent = "Too Low";
        }
      } else {
        messageEl.textContent = "You lost";
        numberEl.textContent = secretNumber;
      }
    }
  }
};

buttonEl.addEventListener('click', logicCheck);

const againLogic = function () {
  bodyEl.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  inputEl.value = '';
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
};
buttonAgainEl.addEventListener('click', againLogic);
