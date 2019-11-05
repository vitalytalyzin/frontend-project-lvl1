import getRandomValue from './utils/getRandomValue';
import letsPlay from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const value = getRandomValue(2, 3572);

  return {
    condition: value,
    result: value % 2 === 0 && value !== 2 ? 'no' : 'yes',
  };
};

export default () => letsPlay(isPrime, description);
