import { cons } from '@hexlet/pairs';
import gameProcess from '../engine';
import rand from '../utils';

const gameDescription = 'What number is missing in the progression?';

const min = 0;
const max = 100;
const maxStep = 10;

const progressionLength = 10;

const getProgression = (firstElement, progressionStep, indexOfMissingElement) => {
  const progression = [];

  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexOfMissingElement) progression.push('..');
    else progression.push(firstElement + (progressionStep * index));
  }
  return progression;
};

const getMissingElement = (progression) => {
  const indexOfMissingElement = progression.indexOf('..');
  return (progression[indexOfMissingElement + 1] + progression[indexOfMissingElement - 1]) / 2;
};

const getQuestionAndRightAnswer = () => {
  const firstElement = rand(min, max);
  const progressionStep = rand(min + 1, maxStep);
  const indexOfMissingElement = rand(min + 1, progressionLength - 1);
  const progression = getProgression(firstElement, progressionStep, indexOfMissingElement);
  const question = progression.join(' ');
  const rightAnswer = getMissingElement(progression).toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
