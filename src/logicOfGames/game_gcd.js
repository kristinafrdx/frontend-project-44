import { getRandome, startGame } from '../index.js';

export const getNOD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const description = 'Find the greatest common divisor of given numbers.';

const gameGCD = () => {
  const number1 = getRandome(20, 1);
  const number2 = getRandome(20, 1);
  const question = `${number1} ${number2}`;
  const correctAnswer = getNOD(number1, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(description, gameGCD);
};
