/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let counter1 = 0; counter1 <= 3; counter1 += 1) {
    myArray.push(counter1);
    for (let counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};
console.log(myCounter());
module.exports = myCounter;
