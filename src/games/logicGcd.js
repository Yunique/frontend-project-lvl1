import { rand, gameProcess } from '../engine';

const getExpression = () => {
  const minRand = 1;
  const maxRand = 100;

  const firstOperand = rand(minRand, maxRand);
  const secondOperand = rand(minRand, maxRand);
  const expression = `${firstOperand} ${secondOperand}`;
  return expression;
};

const getRightAnswer = (expression) => {
  const space = expression.indexOf(' ');
  const firstOperand = Number(expression.slice(0, space));
  const secondOperand = Number(expression.slice(space + 1));

  const gcd = (x, y) => {
    if (y === 0) return Math.abs(x);
    return gcd(y, (x % y));
  };
  return gcd(firstOperand, secondOperand).toString();
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameProcess(description, getExpression, getRightAnswer);
};

export default game;
