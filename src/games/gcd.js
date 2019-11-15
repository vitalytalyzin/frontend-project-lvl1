import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';
import getGcd from '../utils/getGcd';

const minValue = 1;
const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const makeCondition = () => {
  const value1 = getRandomValue(minValue, maxValue);
  const value2 = getRandomValue(minValue, maxValue);

  return {
    question: `${value1} ${value2}`,
    answer: String(getGcd(value1, value2)),
  };
};

export default () => letsPlay(makeCondition, description);
