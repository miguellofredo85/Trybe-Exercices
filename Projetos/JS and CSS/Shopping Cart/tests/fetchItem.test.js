require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('testando se fetchItem e una function', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  it('testando se fetch e chamada com parametro da funca "MLB1615760527"', async () => {
    expect.assertions(1);
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  it('verificando endpoint MLB1615760527', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });
  it('verificar se o retorno de dado e igual ao objeto computadorSearch', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527').then((data) => expect(data).toEqual(item))
  });
  it('testando fetchItem sem argumento retorna You must provide an url', async () => {
    expect.assertions(1);
    expect(await fetchItem()).toEqual(new Error('You must provide an url')); 
  })
});
