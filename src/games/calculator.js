import getRandomValue from '../utils/getRandomValue';
import letsPlay from '..';

const minValue = 1;
const maxValue = 10;

const signs = '-+*';
const signsFirstIndex = 0;
const signsLastIndex = signs.length - 1;

const description = 'What is the result of the expression?';

const makeCondition = () => {
  const value1 = getRandomValue(minValue, maxValue);
  const value2 = getRandomValue(minValue, maxValue);
  const signType = getRandomValue(signsFirstIndex, signsLastIndex);
  let result;

  switch (signs[signType]) {
    case '-':
      result = value1 - value2;
      break;
    case '+':
      result = value1 + value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    default:
      return null;
  }

  return {
    question: `${value1} ${signs[signType]} ${value2}`,
    answer: String(result),
  };
};

export default () => letsPlay(makeCondition, description);
