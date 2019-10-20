import { cons } from '@hexlet/pairs';
import { rand, gameProcess } from '../engine';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const minRand = 0;
const maxRand = 100;

const isEven = (operand) => {
  const answer = (operand % 2 === 0);
  return answer;
};

const getQuestionAndRightAnswer = () => {
  const operand = rand(minRand, maxRand);
  const rightAnswer = (isEven(operand) === true) ? 'yes' : 'no';
  const question = operand.toString();

  return cons(question, rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
