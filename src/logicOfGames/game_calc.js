import startGame from '../index.js';
import getRandome from '../utils.js';

const arr = ['+', '-', '*'];
export const calculat = (number1, operand, number2) => {
  switch (operand) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator');
  }
};

const description = 'What is the result of the expression?';

const gameCalc = () => {
  const number1 = getRandome(50, 1);
  const number2 = getRandome(50, 1);
  const getRandomeIndex = Math.floor(Math.random() * arr.length);
  const operand = arr[getRandomeIndex];
  const question = `${number1} ${operand} ${number2}`;
  const correctAnswer = calculat(number1, operand, number2);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(description, gameCalc);
};
