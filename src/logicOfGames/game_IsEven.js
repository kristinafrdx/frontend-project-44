import startGame from '../index.js';
import getRandome from '../utils.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameIsEven = () => {
  const number = getRandome(100, 1);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(description, gameIsEven);
};
