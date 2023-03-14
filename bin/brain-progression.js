#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  sayHi, getRandomInt, congratulations, check,
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

  counter += check(answer, correctAnswer, name);
}

congratulations(counter, name);
