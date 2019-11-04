import readlineSync from 'readline-sync';

const letsPlay = (playGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  let tries = 0;

  while (tries < 3) {
    const game = playGame();

    console.log(`Question: ${game.condition}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === game.result) {
      console.log('Correct!');
      tries += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${game.result}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (tries > 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default letsPlay;
