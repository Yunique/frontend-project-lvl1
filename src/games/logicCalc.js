import { evaluate } from 'mathjs';
import { rand, gameProcess } from '../engine';

const getExpression = () => {
  const minRand = 0;
  const maxRand = 100;
  const actions = '+-*';
  const firstOperand = rand(minRand, maxRand);
  const secondOperand = rand(minRand, maxRand);
  const expression = `${firstOperand}${actions[rand(minRand, actions.length - 1)]}${secondOperand}`;
  return expression;
};
const getRightAnswer = (expression) => {
  const calcExpression = () => {
    const result = evaluate(expression);
    return result;
  }; return calcExpression().toString();
};


const game = () => {
  const description = 'What is the result of the expression?';
  gameProcess(description, getExpression, getRightAnswer);
};

export default game;
