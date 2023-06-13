import { getRandome, startGame } from '../index.js';

const getProgression = (firstNum, length, step) => {
  const result = [];
  for (let i = firstNum; i < length; i += step) {
    if (result.length !== 10) {
      result.push(i);
    }
  }
  return result;
};

const description = 'What number is missing in the progression?';

const gameProgression = () => {
  const step = getRandome(5, 1);
  const firstNum = getRandome(10, 1);
  const length = firstNum + (step * 10);
  const progression = getProgression(firstNum, length, step);
  const unknowIndex = getRandome(progression.length - 1, 0);
  const correctAnswer = String(progression[unknowIndex]);
  progression[unknowIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  startGame(description, gameProgression);
};
