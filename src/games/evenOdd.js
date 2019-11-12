import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';
import isEven from '../utils/isEven';

const minValue = 1;
const maxValue = 99;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';


const evenOdd = () => {
  const value = getRandomValue(minValue, maxValue);
  const result = isEven(value);

  return {
    condition: value,
    result,
  };
};

export default () => letsPlay(evenOdd, description);
