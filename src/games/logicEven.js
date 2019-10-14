import { rand, gameProcess } from '../engine';

const getExpression = () => {
  const minRand = 0;
  const maxRand = 100;
  const num = rand(minRand, maxRand);
  return num;
};

const getRightAnswer = (number) => {
  const isEven = () => {
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    return answer;
  }; return isEven();
};

const game = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameProcess(description, getExpression, getRightAnswer);
};

export default game;
