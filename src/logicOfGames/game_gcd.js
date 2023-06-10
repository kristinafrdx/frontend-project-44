import { greeting } from "../index.js";
import { nameUsers } from "../index.js";
import { getRandome } from "../index.js";
import readlineSync from 'readline-sync' 
import  { exercize } from "../index.js";
import { answer } from "../index.js";


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

export const gcd = () => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    const mission = 'What is the result of the expression?';
    console.log(mission);

    let count = 0;
    for (let i = 0; i < 3; i += 1) {
    console.log(exercize())
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getNOD(1, 50)
    if (Number(answer) === correctAnswer) {
        console.log('Correct!')
        count += 1
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${nameUser}`)
    }
}
    if (count === 3) {
        return `Congratulations, ${nameUser}`
    }
    }

    