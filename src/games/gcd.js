import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const minValue = 1;
const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const makeCondition = () => {
  const RandValue1 = getRandomValue(minValue, maxValue);
  const RandValue2 = getRandomValue(minValue, maxValue);

  const getGcd = (value1, value2) => {
    const biggerValue = value1 > value2 ? value1 : value2;

    for (let i = biggerValue; ; i -= 1) {
      if (value1 % i === 0 && value2 % i === 0) {
        return i;
      }
    }
  };

  return {
    question: `${RandValue1} ${RandValue2}`,
    answer: String(getGcd(RandValue1, RandValue2)),
  };
};

export default () => letsPlay(makeCondition, description);
