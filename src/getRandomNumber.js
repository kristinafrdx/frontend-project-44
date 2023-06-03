const getRandome = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};
// console.log(getRandome(1000, 0));
export default getRandome;
