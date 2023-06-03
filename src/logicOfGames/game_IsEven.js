import readlineSync from 'readline-sync';
import getRandome from '../getRandomNumber.js';
import greeting from '../cli.js';

const runGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandome(1000, 0);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 2 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "no"\nLet's try again)}!`);
    }
  }
  return;
};
export default runGame;
