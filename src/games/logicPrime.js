import { greeting, rand, gameProcess } from '../engine';

const getExp = () => {
  const minRange = 0;
  const maxRange = 100;
  const num = rand(minRange, maxRange);
  return num;
};

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let counter = 2; counter <= (number / 2); counter += 1) {
    if (number % counter === 0) return 'no';
  } return 'yes';
};

const game = () => {
  const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

  gameProcess(userName, getExp, isPrime);
};

export default game;
