import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';
import isPrime from '../utils/isPrime';

const minValue = 2;
const maxValue = 101;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeCondition = () => {
  const question = getRandomValue(minValue, maxValue);

  return {
    question,
    answer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => letsPlay(makeCondition, description);
