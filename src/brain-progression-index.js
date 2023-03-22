#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandomInt, check, engine,
} from './index.js';

const brainProgression = () => {
  engine('What number is missing in the progression?', (counter, name) => {
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
    const correctAnswer = arr[numOfmissingNum];

    arr[numOfmissingNum] = '..';
    const str = arr.join(' ');

    console.log('Question:', str);
    const answer = readlineSync.question('Your answer: ');

    check(answer, correctAnswer, name);
    return counter + 1;
  });
};

export default { brainProgression };
