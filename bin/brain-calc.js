#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, wrongAnswer, getRandomInt, congratulations,
} from '../src/index.js';

const name = sayHi();
let counter = 0;
console.log('What is the result of the expression?');

function signs() {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomInt(50);
  const num2 = getRandomInt(50);
  const sign = signs();

  console.log('Question: ', num1, sign, num2);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer = 0;

  if (sign === '+') {
    correctAnswer = num1 + num2;
  } else if (sign === '-') {
    correctAnswer = num1 - num2;
  } else {
    correctAnswer = num1 * num2;
  }

  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    counter += 1;
  } else {
    wrongAnswer(name, answer, correctAnswer);
    break;
  }
}

congratulations(counter, name);
