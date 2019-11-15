import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const startRange = 1;
const endRange = 10;
const description = 'What number is missing in the progression?';

const makeCondition = () => {
  const startValue = getRandomValue(startRange, endRange);
  const idxHiddenValue = getRandomValue(startRange, endRange - 1);
  const step = getRandomValue(startRange, endRange);
  let answer;

  let progression = startValue;

  for (let i = startRange; i < endRange; i += 1) {
    if (i === idxHiddenValue) {
      progression += ' ..';
      answer = startValue + idxHiddenValue * step;
    } else if (i !== idxHiddenValue) {
      progression += ` ${startValue + i * step}`;
    }
  }

  return {
    question: progression,
    answer: String(answer),
  };
};

export default () => letsPlay(makeCondition, description);
