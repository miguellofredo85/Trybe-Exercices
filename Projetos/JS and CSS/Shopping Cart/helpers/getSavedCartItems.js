const getSavedCartItems = () => {
  const localSge = localStorage.getItem('cartItems');
  return localSge;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
