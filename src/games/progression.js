import { cons } from '@hexlet/pairs';
import gameProcess from '../engine';
import rand from '../utils';

const gameDescription = 'What number is missing in the progression?';

const min = 0;
const max = 100;
const maxStep = 10;

const progressionLength = 10;

const getProgression = (firstElement, progressionStep, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(firstElement + (progressionStep * index));
  }
  return progression;
};

const getQuestion = (progession, indexOfMissingElement) => {
  const question = progession.slice();
  question[indexOfMissingElement] = '..';
  return question.join(' ');
};

const getRightAnswer = (firstElement, progressionStep, indexOfMissingElement) => {
  const missingElement = firstElement + (progressionStep * indexOfMissingElement);
  return missingElement.toString();
};

const getQuestionAndRightAnswer = () => {
  const firstElement = rand(min, max);
  const progressionStep = rand(min + 1, maxStep);
  const indexOfMissingElement = rand(min + 1, progressionLength - 1);

  const progression = getProgression(firstElement, progressionStep, progressionLength);
  const question = getQuestion(progression, indexOfMissingElement);
  const rightAnswer = getRightAnswer(firstElement, progressionStep, indexOfMissingElement);

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
