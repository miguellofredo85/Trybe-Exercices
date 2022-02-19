require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('sera que e uma funcao?',  () => {
    expect( typeof fetchProducts).toBe('function');
  })
  it('tem como parametro computador?', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  it('verificando endpoint computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('verificar se o retorno de dado e igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('testando fetchProduct sem argumento retorna You must provide an url', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url')); 
  })
});
