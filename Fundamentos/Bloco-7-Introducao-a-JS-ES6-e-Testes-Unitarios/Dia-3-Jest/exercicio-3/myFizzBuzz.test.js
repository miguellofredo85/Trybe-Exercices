const myFizzBuzz = require('./myFizzBuzz');

describe('testando function myFizzBuzz', () => {
    it('retornos de restos 0 numeros 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(6)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(2)).toEqual(2);
        expect(myFizzBuzz('alo')).toBeFalsy();
    });
});