import getRandomValue from './components/getRandomValue';
import letsPlay from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const biggerValue = value1 > value2 ? value1 : value2;

  for (let i = biggerValue; ; i -= 1) {
    if (value1 % i === 0 && value2 % i === 0) {
      return {
        condition: `${value1} ${value2}`,
        result: String(i),
      };
    }
  }
};

export default () => letsPlay(gcd, description);
