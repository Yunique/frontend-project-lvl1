import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const attemptsCount = 3;

export const gameProcess = (gameDescription, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let index = 0; index < attemptsCount; index += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = car(questionAndRightAnswer);
    const rightAnswer = cdr(questionAndRightAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
