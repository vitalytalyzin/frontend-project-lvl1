import getRandomValue from './components/getRandomValue';
import letsPlay from '../index';

const minValue = 1;
const maxValue = 99;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';


const evenOdd = () => {
  const value = getRandomValue(minValue, maxValue);
  const result = value % 2 === 0 ? 'yes' : 'no';

  return {
    condition: value,
    result,
  };
};

export default () => letsPlay(evenOdd, description);
