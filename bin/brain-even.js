#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { sayHi, wrongAnswer, getRandomInt } from '../src/index.js';

const name = sayHi();
let correctAnswer;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(50);
  console.log('Question: ', randomNum);
  const answer = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      correctAnswer = 'yes';
      wrongAnswer(name, answer, correctAnswer);
    }
  } else if (answer === 'no') {
    console.log('Correct!');
    counter += 1;
  } else {
    correctAnswer = 'no';
    wrongAnswer(name, answer, correctAnswer);
  }
}

if (counter === 3) {
  console.log('Congratulations,', `${name}!`);
}
