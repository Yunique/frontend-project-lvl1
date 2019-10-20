import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRand = 0;
const maxRand = 100;

const isPrime = (operand) => {
  if (operand <= 1) return false;
  for (let counter = 2; counter <= (operand / 2); counter += 1) {
    if (operand % counter === 0) return false;
  } return true;
};

const getQuestionAndRightAnswer = () => {
  const question = rand(minRand, maxRand);
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';

  return cons(question.toString(), rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
