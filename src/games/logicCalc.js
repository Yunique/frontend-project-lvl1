import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const rulesOfTheGame = 'What is the result of the expression?';

const actions = '+-*';
const minRand = 0;
const maxRand = 100;

const calcAnswer = (firstOperand, secondOperand, operator) => {
  if (operator === '+') return firstOperand + secondOperand;
  if (operator === '-') return firstOperand - secondOperand;
  return firstOperand * secondOperand;
};

const getQuestionAndRightAnswer = () => {
  const firstOperand = rand(minRand, maxRand);
  const secondOperand = rand(minRand, maxRand);
  const operator = actions[rand(minRand, actions.length - 1)];
  const question = `${firstOperand}${operator}${secondOperand}`;
  const rightAnswer = calcAnswer(firstOperand, secondOperand, operator).toString();

  return cons(question, rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
