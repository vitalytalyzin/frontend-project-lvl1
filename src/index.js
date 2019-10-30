import readlineSync from 'readline-sync';

const minValue = 1;
const maxValue = 99;
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let tries = 0;

const letsPlay = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  while (tries < 3) {
    const value = getRandomValue(minValue, maxValue);
    const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${value}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if ((value % 2 === 0 && getAnswer === 'yes') || (value % 2 === 1 && getAnswer === 'no')) {
      console.log('Correct!');
      tries += 1;
    } else {
      console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (tries > 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default letsPlay;
