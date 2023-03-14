#!/usr/bin/env node

import readlineSync from 'readline-sync';

export function sayHi() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello,', name);
  return name;
}

export function wrongAnswer(name, answer, correctAnswer) {
  console.log(`'${answer}'`, `is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again,`, `${name}!`);
  process.exit(0);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function congratulations(counter, name) {
  if (counter === 3) {
    console.log('Congratulations,', `${name}!`);
  }
}
