const myRemove = require('./myRemove.js');

describe('testando function myRemove', () => {
    it('retorna array se o valor do item caso tiver dentro', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toBe([ 1, 2, 4 ]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
    })
});
