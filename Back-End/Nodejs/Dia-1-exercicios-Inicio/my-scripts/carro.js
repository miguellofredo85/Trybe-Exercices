const readline = require('readline-sync');
const calculoVelocidadeMedia = (dist, tempo) => {
  return dist/tempo;
};

const time = readline.questionFloat('Tempo? ');
const distance = readline.questionFloat('Distancia? ');

const main = () => {
  const media = calculoVelocidadeMedia(time, distance);
  console.log(`Velocidade media = ${media.toFixed(2)}`)
};
main();