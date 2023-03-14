#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, wrongAnswer, getRandomInt, congratulations,
} from '../src/index.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const name = sayHi();
let counter = 0;
let correctAnswer;

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  console.log('Question:', num1, num2);

  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === NOD(num1, num2)) {
    console.log('Correct!');
    counter += 1;
  } else {
    correctAnswer = NOD(num1, num2);
    wrongAnswer(name, answer, correctAnswer);
    break;
  }
}

congratulations(counter, name);
