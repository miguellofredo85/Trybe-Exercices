// const { fetchProducts } = require("./helpers/fetchProducts");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const { fetchItem } = require('./helpers/fetchItem');
const cartList = document.querySelector('.cart__items');
const emptyCart = document.querySelector('.empty-cart');
const loading = document.querySelector('.loading');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const totalPriceItemsChoosen = () => { // com a orientacao do Gustavo Santos
  let sum = 0;
  const cartLis = document.querySelectorAll('.cart__item');
  const totalPrice = document.querySelector('.total-price'); 
  cartLis.forEach((price) => {
    const divisor = price.innerText.split(' ');
    const catchNumber = divisor.slice(-1)[0].slice(1);
    sum += Number(catchNumber);
  });
  totalPrice.innerText = `Total: R$${sum}`;
};

function cartItemClickListener(event) {
  event.target.remove();
  totalPriceItemsChoosen();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
const itemOnList = async (e) => {
  const product = e.target.parentNode.firstChild.innerText;
  const funcItmes = await fetchItem(product);
  const objeto = {
    sku: funcItmes.id,
    name: funcItmes.title,
    salePrice: funcItmes.price,
  };
  cartList.appendChild(createCartItemElement(objeto));
  saveCartItems(cartList.innerHTML);
  totalPriceItemsChoosen();
};

const listaProdutos = async () => {
  await fetchItem();
  const classItems = document.querySelector('.items'); 
  const fetchProd = await fetchProducts('computador');
  const result = fetchProd.results;
  result.forEach((product) => classItems.appendChild(
    createProductItemElement(
      { sku: product.id, name: product.title, image: product.thumbnail },
      ),
    ));
  };

  const addProduct = () => {
    const btnChooseProd = document.querySelectorAll('.item__add');
    btnChooseProd.forEach((btn) => {
      btn.addEventListener('click', itemOnList);
    });
    totalPriceItemsChoosen();
  };

  function savedList() {
    cartList.innerHTML = getSavedCartItems();
    Array.from(cartList.children).forEach((item) => // visto de un video no youtube, depois de tentar 4 funcoes diferente...
    item.addEventListener('click', cartItemClickListener));
  }

  const emptyList = () => {
    // const totalPrice = document.querySelector('.total-price');
    cartList.innerHTML = '';
    totalPriceItemsChoosen();
  };
  emptyCart.addEventListener('click', emptyList);

window.onload = async () => {
  await listaProdutos();
  loading.remove();
  addProduct();
  savedList();
}; 
