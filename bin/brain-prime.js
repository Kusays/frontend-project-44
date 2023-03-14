#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, wrongAnswer, getRandomInt, congratulations,
} from '../src/index.js';

function isPrime(number) {
  if (number <= 1) { return false; }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
}

const name = sayHi();
let counter = 0;
let correctAnswer;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt(100);
  if (isPrime(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log('Question:', num);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    counter += 1;
  } else {
    wrongAnswer(name, answer, correctAnswer);
  }
}

congratulations(counter, name);
