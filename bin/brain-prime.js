#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, wrongAnswer, getRandomInt, congratulations,
} from '../src/index.js';

const name = sayHi();
let counter = 0;
let correctAnswer;

for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt(100);
  if (num > 1) {
    for (let j = 2; j < num; j += 1) {
      if (num % i === 0) {
        correctAnswer = 'yes';
      }
    }
    correctAnswer = 'no';
  }
  console.log('Question:', num);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    counter += 1;
  } else {
    wrongAnswer(name, answer, correctAnswer);
    break;
  }
}

congratulations(counter, name);
