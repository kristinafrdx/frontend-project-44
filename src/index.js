import readlineSync from 'readline-sync'

// get randome number
export const getRandome = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  // console.log(getRandome(1000, 0));
 

//get randome operand 
 export const getRandomeOperand = () => {
  const arr = ['+', '-', '*'];
  const getRandomeIndex = Math.floor(Math.random() * arr.length)
  const operand = arr[getRandomeIndex];
  return operand
};

//greeting
export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    return (`Hello, ${nameUser}!`);
  };

//nameUser
export const nameUsers = () => {
    console.log('Welcome to the Brain Games!');
    const nameUser = readlineSync.question('May I have your name? ');
    return `${nameUser}!`
  };

//question
export const exercize = () => {
  return(`Question: ${getRandome(50, 1)} ${getRandome(50, 1)}`)
  
}

//your ans
export const answer = () => {
  return readlineSync.question('Your answer: ')
}


