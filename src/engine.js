import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const attempts = 3;

const сheckAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer !== rightAnswer) return false;
  return true;
};

export const gameProcess = (rules, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let index = 0; index < attempts; index += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = car(questionAndRightAnswer);
    const rightAnswer = cdr(questionAndRightAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (сheckAnswer(userAnswer, rightAnswer) === false) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
