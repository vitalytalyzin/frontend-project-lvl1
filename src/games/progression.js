import getRandomValue from './utils/getRandomValue';
import letsPlay from '../index';

const startRange = 1;
const endRange = 100;
const description = 'What number is missing in the progression?';

const progression = () => {
  const startNum = getRandomValue(startRange, endRange);
  const step = getRandomValue(startRange, endRange);
  const idxHiddenNum = getRandomValue(1, 10);
  let result = 0;

  let condition = startNum;

  for (let i = 1; i < 10; i += 1) {
    if (i === idxHiddenNum) {
      condition += ' ..';
      result = startNum + idxHiddenNum * step;
    } else if (i !== idxHiddenNum) {
      condition += ` ${startNum + i * step}`;
    }
  }

  return {
    condition,
    result: String(result),
  };
};

export default () => letsPlay(progression, description);
