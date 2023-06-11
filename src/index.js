import readlineSync from 'readline-sync';

// get randome number
export const getRandome = (max, min) => Math.floor(Math.random() * (max - min) + min);

// console.log(getRandome(1000, 0));

// get randome operand
export const getRandomeOperand = () => {
  const arr = ['+', '-', '*'];
  const getRandomeIndex = Math.floor(Math.random() * arr.length);
  const operand = arr[getRandomeIndex];
  return operand;
};

// greeting
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  return (`Hello, ${nameUser}!`);
};

// nameUser
export const nameUsers = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  return `${nameUser}!`;
};

// question
export const exercize = () => (`Question: ${getRandome(50, 1)} ${getRandome(50, 1)}`);

// your ans
export const answer = () => readlineSync.question('Your answer: ');

export const getNOD = () => {
  let num1 = getRandome(1, 10);
  let num2 = getRandome(1, 10);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};
