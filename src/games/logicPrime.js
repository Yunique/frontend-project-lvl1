import { rand, gameProcess } from '../engine';

const getExpression = () => {
  const minRand = 0;
  const maxRand = 100;
  const operand = rand(minRand, maxRand);
  return operand;
};

const getRightAnswer = (number) => {
  const isPrime = () => {
    if (number <= 1) return false;
    for (let counter = 2; counter <= (number / 2); counter += 1) {
      if (number % counter === 0) return 'no';
    } return 'yes';
  }; return isPrime();
};

const game = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameProcess(description, getExpression, getRightAnswer);
};

export default game;
