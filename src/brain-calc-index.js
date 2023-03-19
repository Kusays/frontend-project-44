#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandomInt, check, engine,
} from './index.js';

function signs() {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function brainCalc() {
  engine('What is the result of the expression?', (counter, name) => {
    const num1 = getRandomInt(50);
    const num2 = getRandomInt(50);
    const sign = signs();

    console.log('Question:', num1, sign, num2);
    const answer = readlineSync.question('Your answer: ');

    let correctAnswer = 0;

    if (sign === '+') {
      correctAnswer = num1 + num2;
    } else if (sign === '-') {
      correctAnswer = num1 - num2;
    } else {
      correctAnswer = num1 * num2;
    }

    check(answer, correctAnswer, name);
    return counter + 1;
  });
}
export default { brainCalc };
