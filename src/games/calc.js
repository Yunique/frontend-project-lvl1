import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const gameDescription = 'What is the result of the expression?';

const actions = '+-*';
const min = 0;
const max = 100;

const calcAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const getQuestionAndRightAnswer = () => {
  const firstOperand = rand(min, max);
  const secondOperand = rand(min, max);
  const operator = actions[rand(min, actions.length - 1)];
  const question = `${firstOperand}${operator}${secondOperand}`;
  const rightAnswer = calcAnswer(firstOperand, secondOperand, operator).toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
