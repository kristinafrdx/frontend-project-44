import readlineSync from 'readline-sync';
import { getRandome } from '../index.js';

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

export const gameGCD = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomeNum1 = getRandome(20, 1);
    const randomeNum2 = getRandome(20, 1);
    console.log(`Quection: ${randomeNum1} ${randomeNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getNOD(randomeNum1, randomeNum2);
    if (String(correctAnswer) === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${nameUser}!`);
    }
  }
  if (count === 3) {
    return `Congratulations, ${nameUser}!`;
  }
};
