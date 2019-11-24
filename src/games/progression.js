import getRandomValue from '../utils/getRandomValue';
import letsPlay from '../index';

const progressionLength = 10;
const description = 'What number is missing in the progression?';

const makeCondition = () => {
  const startValue = getRandomValue(0, progressionLength);
  const idxMissingValue = getRandomValue(0, progressionLength - 1);
  const diff = getRandomValue(1, progressionLength);
  let answer;

  let progression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === idxMissingValue) {
      progression = `${progression} ..`;
      answer = startValue + diff * i;
    } else {
      progression = `${progression} ${startValue + diff * i}`;
    }
  }

  return {
    question: progression.slice(1),
    answer: String(answer),
  };
};

export default () => letsPlay(makeCondition, description);
