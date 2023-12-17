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
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('⚠️ No Number ');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //we have to spacify a string
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').style.width = '30rem'; //we have to spacify a string
  }
});
