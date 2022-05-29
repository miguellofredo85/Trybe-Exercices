// const { describe } = require('yargs');
// const { expect } = require('@jest/globals');
const {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
  } = require('./challenges.js');

describe('testeando funciones encode e decode', () => {
    it('testeando funciones encode e decode', () => {
    expect(decode).toBeDefined();
    expect(encode).toBeDefined();
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(encode('trybe').length).toEqual(5);
    expect(decode('cangel').length).toEqual(6);
  })
})
