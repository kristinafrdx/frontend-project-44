import readlineSync from 'readline-sync';
import getRandome from '../getRandomNumber.js';

const arr = ['+', '-', '*'];
const getRandomeIndex = Math.floor(Math.random() * arr.length);

const calculat = (number1, operand, number2) => {
  switch (operand) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;
  }
};

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('What is the result of the expression?');

  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandome(20, 1);
    const number2 = getRandome(20, 1);
    const operand = arr[getRandomeIndex];

    console.log(`Question: ${number1} ${operand} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = calculat(number1, operand, number2);
    if (answer === correctAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return ("Let's try again!");
    }
  }
  if (count === 3) {
    return `Congratulation, ${nameUser}!`;
  }
};

export default gameCalc;
