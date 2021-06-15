'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congradulatiobs! Nube is correct';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'the numer is higher!';
  } else {
    document.querySelector('.message').textContent = 'the number is lower!';
  }
});
//lets check some changes
//try to create DOM manipulation object