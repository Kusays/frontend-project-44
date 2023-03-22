#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello,', name);
  return name;
};

export const wrongAnswer = (name, answer, correctAnswer) => {
  console.log(`'${answer}'`, `is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again,`, `${name}!`);
  process.exit(0);
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const congratulations = (counter, name) => {
  if (counter === 3) {
    console.log('Congratulations,', `${name}!`);
  }
};

export const check = (answer, correctAnswer, name) => {
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  wrongAnswer(name, answer, correctAnswer);
  return 0;
};

export const checkNotNum = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  wrongAnswer(name, answer, correctAnswer);
  return 0;
};

export const engine = (rules, main) => {
  const name = sayHi();
  console.log(rules);
  let counter = 0;

  for (let i = 0; i < 3; i += 1) {
    counter = main(counter, name);
  }

  congratulations(counter, name);
};
