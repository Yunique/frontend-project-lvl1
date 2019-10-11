import { evaluate } from 'mathjs';
import { greeting, rand, gameProcess } from '../engine';

const getExp = () => {
  const minRange = 0;
  const maxRange = 100;
  const actions = '+-*';
  const firstNum = rand(minRange, maxRange);
  const secondNum = rand(minRange, maxRange);
  const exp = `${firstNum}${actions[rand(minRange, actions.length - 1)]}${secondNum}`;
  return exp;
};

const calcExp = (expression) => {
  const result = evaluate(expression).toString();
  return result;
};

const game = () => {
  const userName = greeting('What is the result of the expression?');
  gameProcess(userName, getExp, calcExp);
};

export default game;
