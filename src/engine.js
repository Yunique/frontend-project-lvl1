import readlineSync from 'readline-sync';

export const rand = (randMin, randMax) => {
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return getRandomInRange(randMin, randMax);
};

const greetAndShowDescription = (description) => {
	console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
};

const getName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => console.log(`Hello, ${name}!\n`);

const getAndCheckAnswer = (expression, rightAnswer) => {
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== rightAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return answer;
  }
  console.log('Correct!');
  return true;
};

export const gameProcess = (description, getExpression, getRightAnswer) => {
  const attempts = 3;
		
	greetAndShowDescription(description);
  const name = getName();
	sayHello(name);

  for (let index = 0; index < attempts; index += 1) {
    const expression = getExpression();
    const rightAnswer = getRightAnswer(expression);
    const result = getAndCheckAnswer(expression, rightAnswer);
    if (result !== true) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
