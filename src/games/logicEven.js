import { greeting, rand, gameProcess } from '../engine'

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no';

const getExp = () => {
  const maxRange = 100;
  const num = rand(0, maxRange);
  return num;
}

export const game = () => {
  const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  
  
  gameProcess(userName, getExp, isEven);
  return;
};
