import readlineSync from 'readline-sync';

// get randome number
export const getRandome = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

// console.log(getRandome(1000, 0));

// get randome operand
export const getRandomeOperand = () => {
  const arr = ['+', '-', '*'];
  const getRandomeIndex = Math.floor(Math.random() * arr.length);
  const operand = arr[getRandomeIndex];
  return operand;
};

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

export const startGame = (description, getQuestionAndCorrectAnswer) => {
// greeting

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  // описание игры
  console.log(description);

  // запуск 3-ех раундов

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Quection: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};
