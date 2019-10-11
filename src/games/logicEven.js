import { greeting, rand, gameProcess } from '../engine';

const isEven = (num) => {
  const answ = (num % 2 === 0) ? 'yes' : 'no';
  return answ;
};

const getExp = () => {
  const minRange = 0;
  const maxRange = 100;
  const num = rand(minRange, maxRange);
  return num;
};

const game = () => {
  const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');

  gameProcess(userName, getExp, isEven);
};

export default game;
