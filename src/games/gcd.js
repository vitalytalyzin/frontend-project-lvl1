import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const minValue = 1;
const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const biggerValue = num1 > num2 ? num1 : num2;

  for (let i = biggerValue; ; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
};

const makeCondition = () => {
  const value1 = getRandomValue(minValue, maxValue);
  const value2 = getRandomValue(minValue, maxValue);

  return {
    question: `${value1} ${value2}`,
    answer: String(getGcd(value1, value2)),
  };
};

export default () => letsPlay(makeCondition, description);
