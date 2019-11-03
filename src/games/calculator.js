import readlineSync from 'readline-sync';
import getRandomValue from './components/getRandomValue';
import {
  askQuestion, sayHello, sayApologize, congratulate, sayTryAgain,
} from './components/userInteraction';

const minValue = 1;
const maxValue = 10;
let tries = 0;

const signs = '-+*';
const signsFirstIdx = 0;
const signsLastInx = signs.length;


const calculator = () => {
  console.log('What is the result of the expression?');

  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  sayHello(userName);
  console.log('');

  while (tries < 3) {
    const value1 = getRandomValue(minValue, maxValue);
    const value2 = getRandomValue(minValue, maxValue);
    const getSign = getRandomValue(signsFirstIdx, signsLastInx);
    let result = 0;

    const condition = `${value1} ${signs[getSign]} ${value2}`;
    askQuestion(condition);

    if (signs[getSign] === '-') {
      result = value1 - value2;
    } else if (signs[getSign] === '+') {
      result = value1 + value2;
    } else if (signs[getSign] === '*') {
      result = value1 * value2;
    }

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === result) {
      console.log('Correct!');
      tries += 1;
    } else {
      sayApologize(userAnswer, result);
      sayTryAgain(userName);
      break;
    }
  }

  if (tries > 2) {
    congratulate(userName);
  }
};

export default calculator;
