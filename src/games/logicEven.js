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
  const question = rand(minRand, maxRand);
  const rightAnswer = (isEven(question) === true) ? 'yes' : 'no';

  return cons(question.toString(), rightAnswer);
};

const game = () => gameProcess(rulesOfTheGame, getQuestionAndRightAnswer);

export default game;
