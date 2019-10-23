import { cons } from '@hexlet/pairs';
import gameProcess from '../engine';
import rand from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 100;

const isEven = (operand) => (operand % 2 === 0);

const getQuestionAndRightAnswer = () => {
  const operand = rand(min, max);
  const rightAnswer = (isEven(operand)) ? 'yes' : 'no';
  const question = operand.toString();

  return cons(question, rightAnswer);
};

export default () => gameProcess(gameDescription, getQuestionAndRightAnswer);
