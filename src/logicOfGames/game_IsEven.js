import getRandome from "../getRandomNumber.js";
import readlineSync from 'readline-sync';
import greeting from "../cli.js";

let number = getRandome(1000, 0);
const isEven = (number) => {
    let res
    if (number % 2 === 0) {
        res = true
    }
    return res
}

const runGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = res
    if (correctAnswer === answer) {
        return 'Correct!';
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${nameUser}!`);
    }
    return 
  };


export default runGame;