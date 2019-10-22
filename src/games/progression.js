import { cons, car, cdr } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const gameDescription = 'What number is missing in the progression?';

const min = 0;
const max = 100;
const maxStep = 10;

const progressionLength = 10;

const getProgressionAndTaskAnswer = () => {
  const progression = [];
  const firstElement = rand(min, max);
  const progressionStep = rand(min + 1, maxStep);
  const indexOfMissingElement = rand(min + 1, progressionLength - 1);
  const taskAnswer = firstElement + (progressionStep * indexOfMissingElement);

  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexOfMissingElement) progression.push('..');
    else progression.push(firstElement + (progressionStep * index));
  }

  return cons(progression, taskAnswer);
};


const getQuestionAndRightAnswer = () => {
  const progressionAndTaskAnswer = getProgressionAndTaskAnswer();
  const question = car(progressionAndTaskAnswer).join(' ');
  const rightAnswer = cdr(progressionAndTaskAnswer).toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
