import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const minValue = 1;
const maxValue = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const makeCondition = () => {
  const question = getRandomValue(minValue, maxValue);

  return {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  };
};

export default () => letsPlay(makeCondition, description);
