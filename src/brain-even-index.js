#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { engine, wrongAnswer, getRandomInt } from './index.js';

const brainEven = () => {
  engine('Answer "yes" if the number is even, otherwise answer "no".', (counter, name) => {
    let correctAnswer;
    const randomNum = getRandomInt(50);
    console.log('Question:', randomNum);
    const answer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        return counter + 1;
      }
      correctAnswer = 'yes';
      wrongAnswer(name, answer, correctAnswer);
    } else if (answer === 'no') {
      console.log('Correct!');
      return counter + 1;
    } else {
      correctAnswer = 'no';
      wrongAnswer(name, answer, correctAnswer);
    }
    return counter;
  });
};

export default { brainEven };
