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
  let numFirst = '';
  let numSecond = '';
  for (let index = 0; expression[index] !== ' '; index += 1) {
    numFirst += expression[index];
  }
  
  for (let index = 0; index <= expression.length; index += 1) {
    if (expression[index] === ' ') {
    numSecond = expression.slice(index + 1);
    }
  }
  numFirst = Number(numFirst);
  numSecond = Number(numSecond);
  
  const gcd = (x, y) => {
    if (y === 0) return Math.abs(x);
    return gcd(y, (x % y));
  }
  return gcd(numFirst, numSecond).toString();
};

const game = () => {
  const userName = greeting('What is the result of the expression?');
  gameProcess(userName, getExp, calcExp);
};

export default game;

