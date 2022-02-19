const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testeando se localStorage.getItem e chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('testeando com parametro cartItems', () => {
    getSavedCartItems()
      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
