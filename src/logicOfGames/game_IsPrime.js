import { getRandome, startGame } from '../index.js';

export const isPrime = (number) => {
  if (number > 0) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const number = getRandome(30, 1);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(description, gamePrime);
};
