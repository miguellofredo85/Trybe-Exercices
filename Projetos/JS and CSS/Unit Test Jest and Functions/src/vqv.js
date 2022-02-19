/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (string, number) => {
  if (!string || !number) {
    return undefined;
  }
  let syingHello = `Oi, meu nome é ${string}!
Tenho ${number} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return syingHello;
};
console.log(vqv('miguel', 30));
module.exports = vqv;
