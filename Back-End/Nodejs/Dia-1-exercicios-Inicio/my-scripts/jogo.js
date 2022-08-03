const readline = require('readline-sync');
const randomNumber = (number, answer) => {
  if(number !== answer) return console.log("Errou, tente novamente");
  return console.log(`Yeah baby`);
};

const main = () => {
  const random = parseInt(Math.random()*10, 10);
  const chosen =  readline.questionInt('Choose a number between 0 and 10 please: ');
  randomNumber(random, chosen);
};

main();