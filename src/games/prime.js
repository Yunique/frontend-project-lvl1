import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 0;
const max = 100;

const isPrime = (operand) => {
  if (operand <= 1) return false;
  for (let counter = 2; counter <= (operand / 2); counter += 1) {
    if (operand % counter === 0) return false;
  } return true;
};

const getQuestionAndRightAnswer = () => {
  const question = rand(min, max);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';

  return cons(question.toString(), rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
