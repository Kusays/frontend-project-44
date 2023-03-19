#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandomInt, engine, checkNotNum,
} from './index.js';

function brainPrime() {
  function isPrime(number) {
    if (number <= 1) { return false; }

    for (let i = 2; i * i <= number; i += 1) {
      if (number % i === 0) { return false; }
    }
    return true;
  }

  engine('Answer "yes" if given number is prime. Otherwise answer "no".', (counter, name) => {
    const num = getRandomInt(100);
    let correctAnswer;
    if (isPrime(num)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log('Question:', num);
    const answer = readlineSync.question('Your answer: ');

    checkNotNum(answer, correctAnswer, name);
    return counter + 1;
  });
}
export default { brainPrime };
