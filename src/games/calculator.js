import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const minValue = 1;
const maxValue = 10;

const signs = '-+*';
const signsFirstIdx = 0;
const signsLastInx = signs.length;

const description = 'What is the result of the expression?';

const makeCondition = () => {
  const value1 = getRandomValue(minValue, maxValue);
  const value2 = getRandomValue(minValue, maxValue);
  const getSign = getRandomValue(signsFirstIdx, signsLastInx);
  let result = 0;

  if (signs[getSign] === '-') {
    result = value1 - value2;
  } else if (signs[getSign] === '+') {
    result = value1 + value2;
  } else if (signs[getSign] === '*') {
    result = value1 * value2;
  }

  return {
    question: `${value1} ${signs[getSign]} ${value2}`,
    answer: String(result),
  };
};

export default () => letsPlay(makeCondition, description);
