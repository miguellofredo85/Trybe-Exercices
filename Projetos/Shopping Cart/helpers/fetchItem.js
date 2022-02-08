const fetchItem = async (itemId) => {
  if (!itemId) return new Error('You must provide an url');

  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
