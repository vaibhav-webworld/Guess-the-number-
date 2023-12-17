'use strict';
/*
console.log(document.querySelector('.message').textContent); //we can select elements based on its class
document.querySelector('.message').textContent = 'Correct number';
console.log(
  (document.querySelector('.message').textContent = 'Correct number')
);
console.log((document.querySelector('.number').textContent = 13));
console.log((document.querySelector('.score').textContent = 15));

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // it is showing nothing i.e. empty, therefore .guess is input so it is empty value.this is before setting value of guess = 23.

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(typeof guess); //It is showing type to be string.
});
//If we want to compare numbers then we have to convert string to number.
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correc Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
