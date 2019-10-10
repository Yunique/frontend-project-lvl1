import readlineSync from 'readline-sync';

const rand = () => {
  const rangeMin = 0;
  const rangeMax = 100;

  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
  return getRandomInRange(rangeMin, rangeMax);
};

const firstNum = rand();
const secondNum = rand();
const thirdNum = rand();

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no';

export const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
    
  const lose = `Let's try again, ${name}!`;
  const win = `Congratulations, ${name}!`;

  console.log(`Question: ${firstNum}`);
  const firstAns = readlineSync.question('You answer: ');
  if (firstAns !== isEven(firstNum)) {
    console.log(lose);
    return;
  };
  console.log('Correct!');

  console.log(`Question: ${secondNum}`);
  const secondAns = readlineSync.question('You answer: ');
  if (secondAns !== isEven(secondNum)) {
    console.log(lose);
    return;
  };
  console.log('Correct!');
    
  console.log(`Question: ${thirdNum}`);
  const thirdAns = readlineSync.question('You answer: ');
  if (thirdAns !== isEven(thirdNum)) {
    console.log(lose);
    return;
  };
  console.log('Correct!');

  console.log(win);
  return;
};
