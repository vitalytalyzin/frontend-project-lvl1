import getRandomValue from '../utils/getRandomValue';
import letsPlay from '..';

const minValue = 2;
const maxValue = 101;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  const halfOfValue = value / 2;

  for (let i = 2; i < halfOfValue; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const makeCondition = () => {
  const question = getRandomValue(minValue, maxValue);

  return {
    question,
    answer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => letsPlay(makeCondition, description);
