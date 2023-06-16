import readlineSync from 'readline-sync';

const startGame = (description, getQuestionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(description);
  const countRounds = 3;
  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default startGame;
