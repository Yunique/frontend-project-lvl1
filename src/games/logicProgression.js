import { greeting, rand, gameProcess } from '../engine';

const getProgression = () => {
  const minRand = 0;
  const maxRand = 100;
  const maxStep = 7;
  const arrLength = 10;

  const firstNum = rand(minRand, maxRand);
  const step = rand(minRand + 1, maxStep);
  const missIndex = rand(minRand, arrLength - 1);

  const arr = [firstNum];

  for (let index = 1; index < arrLength; index += 1) {
    if (index === missIndex) {
      arr.push('..');
      arr.push(arr[index - 1] + step * 2);
      index += 1;
    } else arr.push(arr[index - 1] + step);
  }

  const stringArr = arr.join(' ');

  return stringArr;
};

const calcNum = (string) => {
  const arr = string.split(' ');
  const indexOfMiss = arr.indexOf('..');
  const result = (Number(arr[indexOfMiss + 1]) + Number(arr[indexOfMiss - 1])) / 2;
  return result.toString();
};

const game = () => {
  const userName = greeting('What number is missing in the progression?');
  gameProcess(userName, getProgression, calcNum);
};

export default game;
