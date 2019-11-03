export const sayHello = (userName) => {
  console.log(`Hello, ${userName}`);
};

export const sayApologize = (userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
};

export const sayTryAgain = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

export const congratulate = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const askQuestion = (condition) => {
  console.log(`Question: ${condition}`);
};
