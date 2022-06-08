const readline = require('readline-sync');

const calculadiraImc = (peso, altura) => {
  return peso/((altura/100)**2);
};
const peso = readline.questionFloat('Qual e seu peso? ');
const altura = readline.questionInt('Qual e sua altura? ');

const main = () => {
  const imc = calculadiraImc(peso, altura);
  console.log(`IMC = ${imc.toFixed(2)}`);
  if(imc < 18.5) console.log('Abaixo do peso');
  if(imc > 18,5 && imc < 24.9) console.log('Peso normal');
  if(imc > 25 && imc < 29.9) console.log('Acima do peso');
  if(imc > 30 && imc < 34.99) console.log('Obesidad grau 1');
  if(imc > 35 && imc < 39.99) console.log('Obesidad grau 2');
  if(imc > 40) console.log('Obesidad grau 3 e 4');
};
main();