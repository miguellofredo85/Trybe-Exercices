require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('verifica nome do character', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('verifica erro com funcao sem parametro ', async () =>{
  const failRequest = await fetchCharacter();
  expect(failRequest).toEqual(new Error('You must provide an url'));
  })
  it('verifica parametro que nao coincide', async () => {
    const response = await fetchCharacter('alburqueque');
    expect(response).toBe('Invalid id'); 
  })
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});