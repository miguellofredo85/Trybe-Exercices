const saveCartItems = (saved) => localStorage.setItem('cartItems', saved);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
