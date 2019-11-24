import readlineSync from 'readline-sync';

const letsPlay = (condition, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const tries = 3;

  for (let i = 0; i < tries; i += 1) {
    const game = condition();

    console.log(`Question: ${game.question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === game.answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${game.answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default letsPlay;
