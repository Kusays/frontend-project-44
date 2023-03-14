#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, wrongAnswer, getRandomInt, congratulations,
} from '../src/index.js';

const name = sayHi();
let counter = 0;
let correctAnswer;

console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
  const arr = [];
  let start = getRandomInt(100);
  arr.push(start);
  const step = getRandomInt(10);
  let j = 0;
  while (j < 9) {
    start += step;
    arr.push(start);
    j += 1;
  }

  const numOfmissingNum = getRandomInt(10);
  correctAnswer = arr[numOfmissingNum];

  arr[numOfmissingNum] = '..';
  const str = arr.join(' ');

  console.log('Question:', str);
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
