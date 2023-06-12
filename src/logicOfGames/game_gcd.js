import readlineSync from 'readline-sync';
import { getRandome } from '../index.js';
import startGame from '../index.js';

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

const description = 'Find the greatest common divisor of given numbers.'

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandome(20, 1);
  const number2 = getRandome(20, 1);
  const question = `${number1} ${number2}`
  const correctAnswer = getNOD(number1, number2)
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(description, getQuestionAndCorrectAnswer);
}


/* 
const gameGCD = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomeNum1 = getRandome(20, 1);
    const randomeNum2 = getRandome(20, 1);
    console.log(`Quection: ${randomeNum1} ${randomeNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getNOD(randomeNum1, randomeNum2);
    if (String(correctAnswer) === answer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return `Let's try again, ${nameUser}!`;
    }
  }
  if (count === 3) {
    return `Congratulations, ${nameUser}!`;
  }
};

export default gameGCD;
*/