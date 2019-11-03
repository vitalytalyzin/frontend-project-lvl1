import readlineSync from 'readline-sync';
import getRandomValue from './components/getRandomValue';
import {
  askQuestion, sayHello, sayApologize, congratulate, sayTryAgain,
} from './components/userInteraction';

const minValue = 1;
const maxValue = 99;
let tries = 0;

const evenOdd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  sayHello(userName);
  console.log('');


  while (tries < 3) {
    const value = getRandomValue(minValue, maxValue);
    const correctAnswer = value % 2 === 0 ? 'yes' : 'no';
    askQuestion(value);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((value % 2 === 0 && userAnswer === 'yes') || (value % 2 === 1 && userAnswer === 'no')) {
      console.log('Correct!');
      tries += 1;
    } else {
      sayApologize(userAnswer, correctAnswer);
      sayTryAgain(userName);
      break;
    }
  }

  if (tries > 2) {
    congratulate(userName);
  }
};

export default evenOdd;
