// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , 
// que transforma as letras de uma palavra em letras maiúsculas. 
// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test('verificando uppercase', (done) => {
  uppercase('miguel', (str) =>{ 
    try {
      expect(str).toBe('MIGUEL');
      done();
    }catch (error) {
      done(error);
    }
  })
})