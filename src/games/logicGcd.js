import { greeting, rand, gameProcess } from '../engine';

const getExp = () => {
  const minRange = 0;
  const maxRange = 100;

  const firstNum = rand(minRange, maxRange);
  const secondNum = rand(minRange, maxRange);
  const exp = `${firstNum} ${secondNum}`;
  return exp;
};

const calcExp = (expression) => {
  const space = expression.indexOf(' ');
  const numFirst = Number(expression.slice(0, space));
  const numSecond = Number(expression.slice(space + 1));

  const gcd = (x, y) => {
    if (y === 0) return Math.abs(x);
    return gcd(y, (x % y));
  };
  return gcd(numFirst, numSecond).toString();
};

const game = () => {
  const userName = greeting('Find the greatest common divisor of given numbers.');
  gameProcess(userName, getExp, calcExp);
};

export default game;
