import { rand, gameProcess } from '../engine';

const getProgression = () => {
  const minRand = 0;
  const maxRand = 100;
  const maxStep = 7;
  const arrayLength = 10;

  const firstElement = rand(minRand, maxRand);
  const step = rand(minRand + 1, maxStep);
  const missIndex = rand(minRand, arrayLength - 1);

  const progressionArray = [firstElement];

  for (let index = 1; index < arrayLength; index += 1) {
    if (index === missIndex) {
      progressionArray.push('..');
      progressionArray.push(progressionArray[index - 1] + step * 2);
      index += 1;
    } else progressionArray.push(progressionArray[index - 1] + step);
  }

  const stringProgression = progressionArray.join(' ');

  return stringProgression;
};

const getRightAnswer = (string) => {
  const calcElement = () => {
    const progArr = string.split(' ');
    const indexOfMiss = progArr.indexOf('..');
    const result = (Number(progArr[indexOfMiss + 1]) + Number(progArr[indexOfMiss - 1])) / 2;
    return result;
  }; return calcElement().toString();
};

const game = () => {
  const description = 'What number is missing in the progression?';
  gameProcess(description, getProgression, getRightAnswer);
};

export default game;
