import { cons, car, cdr } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const rulesOfTheGame = 'What number is missing in the progression?';

const minRand = 0;
const maxRand = 100;
const maxStep = 10;

const progressionLength = 10;

const getProgressionAndMissingElement = () => {
  const progression = [];
  const firstElement = rand(minRand, maxRand);
  const progressionStep = rand(minRand + 1, maxStep);
  const indexOfMissingElement = rand(minRand + 1, progressionLength - 1);
  const missingElement = firstElement + (progressionStep * indexOfMissingElement);

  for (let index = 0; index < progressionLength; index += 1) {
    if (index === indexOfMissingElement) progression.push('..');
    else progression.push(firstElement + (progressionStep * index));
  }

  return cons(progression, missingElement);
};


const getQuestionAndRightAnswer = () => {
  const progressionAndMissingElement = getProgressionAndMissingElement();
  const question = car(progressionAndMissingElement).join(' ');
  const rightAnswer = cdr(progressionAndMissingElement).toString();

  return cons(question, rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
