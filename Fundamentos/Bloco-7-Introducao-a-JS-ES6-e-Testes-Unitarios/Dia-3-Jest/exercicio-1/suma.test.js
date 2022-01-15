// const { test, it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const sum = require('./suma');


describe('testeando function sum', () => {
    it('se espera que la suma de 4 mas 5 seja 9', ()=>{
        expect(sum(4, 5)).toEqual(9);
        expect(sum(0, 0)).toEqual(0);
    });
    it('testando se da erro', ()=>{
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});

describe('testando funcao myRemove', () =>{
    it('se espera o esperado', () =>{
        expect(myRemove([1, 2, 3, 4], 3))
    })
})
 