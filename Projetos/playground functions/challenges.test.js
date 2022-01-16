// const { describe } = require('yargs');
// const { expect } = require('@jest/globals');
const { encode, decode } = require('./challenges.js');

describe('testeando funciones encode e decode', () => {
    expect(decode('h3 th2r2!')).toBe('hi there!')
})
