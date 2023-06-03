import readlineSync from 'readline-sync';
import getRandome from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandome(1000, 0);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
      return `Let's try again ${nameUser}!`;
    }
  }
  if (count === 3) {
    return `Congratulation, ${nameUser}!`;
  }
};
export default game;
