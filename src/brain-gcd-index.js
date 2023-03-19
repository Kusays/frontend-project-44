#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  engine, wrongAnswer, getRandomInt,
} from './index.js';

function brainGcd() {
  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }

  engine('Find the greatest common divisor of given numbers.', (counter, name) => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    console.log('Question:', num1, num2);
    const answer = readlineSync.question('Your answer: ');
    if (parseInt(answer, 10) === NOD(num1, num2)) {
      console.log('Correct!');
      return counter + 1;
    }
    wrongAnswer(name, answer, NOD(num1, num2));
    return counter;
  });
}

export default { brainGcd };
