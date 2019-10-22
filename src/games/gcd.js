import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const min = 0;
const max = 100;

const getGcd = (x, y) => {
  if (y === 0) return Math.abs(x);
  return getGcd(y, (x % y));
};

const getQuestionAndRightAnswer = () => {
  const firstOperand = rand(min + 1, max);
  const secondOperand = rand(min + 1, max);
  const question = `${firstOperand} ${secondOperand}`;
  const rightAnswer = getGcd(firstOperand, secondOperand).toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
