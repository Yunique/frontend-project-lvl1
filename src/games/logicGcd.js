import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const minRand = 0;
const maxRand = 100;

const gcd = (x, y) => {
  if (y === 0) return Math.abs(x);
  return gcd(y, (x % y));
};

const getQuestionAndRightAnswer = () => {
  const firstOperand = rand(minRand + 1, maxRand);
  const secondOperand = rand(minRand + 1, maxRand);
  const question = `${firstOperand} ${secondOperand}`;
  const rightAnswer = gcd(firstOperand, secondOperand).toString();

  return cons(question, rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
