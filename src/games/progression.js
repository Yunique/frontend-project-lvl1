import { cons } from '@hexlet/pairs';
import gameProcess from '../engine';
import rand from '../utils';

const gameDescription = 'What number is missing in the progression?';

const min = 0;
const max = 100;
const maxStep = 10;

const progressionLength = 10;

const getProgression = () => {
  const progression = [];
  const firstElement = rand(min, max);
  const progressionStep = rand(min + 1, maxStep);
  const indexOfMissingElement = rand(min + 1, progressionLength - 1);

  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexOfMissingElement) progression.push('..');
    else progression.push(firstElement + (progressionStep * index));
  }
  return progression;
};

const getRightAnswer = (progression) => {
  const indexOfMissingElement = progression.indexOf('..');
  return (progression[indexOfMissingElement + 1] + progression[indexOfMissingElement - 1]) / 2;
};

const getQuestionAndRightAnswer = () => {
  const progression = getProgression();
  const question = progression.join(' ');
  const rightAnswer = getRightAnswer(progression).toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
