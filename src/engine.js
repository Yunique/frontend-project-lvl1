import readlineSync from 'readline-sync';

export const rand = (rangeMin, rangeMax) => {
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return getRandomInRange(rangeMin, rangeMax);
};

export const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  return name;
};

const isEqual = (expression, rightAns) => {
  console.log(`Question: ${expression}`);
  const ans = readlineSync.question('Your answer: ');
  if (ans !== rightAns) {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${rightAns}.`);
    return ans;
  }
  console.log('Correct!');
  return true;
};

export const gameProcess = (name, expressionFoo, calcAns) => {
  const attempts = 3;

  for (let index = 0; index < attempts; index += 1) {
    const expression = expressionFoo();
    const rightAns = calcAns(expression);
    const res = isEqual(expression, rightAns);
    if (res !== true) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
