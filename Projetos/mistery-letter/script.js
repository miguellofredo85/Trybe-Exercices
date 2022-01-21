const input = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const newspaper = document.querySelector('.newspaper');
const magazine1 = document.querySelector('.magazine1');
const magazine2 = document.querySelector('.magazine2');
const medium = document.querySelector('.medium');
const big = document.querySelector('.big');
const reallybig = document.querySelector('.reallybig');
const rotateleft = document.querySelector('.rotateleft');
const rotateright = document.querySelector('.rotateright');
const skewright = document.querySelector('.skewright');
const skewleft = document.querySelector('.skewleft');
const wordsNumber = document.querySelector('#carta-contador');

function btnCriar() {
  cartaGerada.innerHTML = '';
  const arrNew = input.value.split(' ');
  wordsNumber.innerHTML = arrNew.length;
  for (const palavra of arrNew) {
    const span = document.createElement('span');
    span.innerText = palavra;
    cartaGerada.appendChild(span);
  }
  if (!input.value || !input.value.trim()) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}
criarCarta.addEventListener('click', btnCriar);

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function style() {
  const randomEstilo = Math.floor(Math.random() * estilo.length);
  const newStyle = estilo[randomEstilo];
  return newStyle;
}
function size() {
  const randomTamanho = Math.floor(Math.random() * tamanho.length);
  const newTamanho = tamanho[randomTamanho];
  return newTamanho;
}
function rotation() {
  const randomRotacao = Math.floor(Math.random() * rotacao.length);
  const newRotacao = rotacao[randomRotacao];
  return newRotacao;
}
function inclination() {
  const randomInclinacao = Math.floor(Math.random() * inclinacao.length);
  const newInclinacao = inclinacao[randomInclinacao];
  return newInclinacao;
}
function addingClass() {
  const spans = document.querySelectorAll('span');
  for (const index of spans) {
    index.classList.add(style());
    index.classList.add(size());
    index.classList.add(rotation());
    index.classList.add(inclination());
    index.addEventListener('click', changeStyleWord);
  }
}
function changeStyleWord(e) {
  e.target.classList = ('');
  e.target.classList.add(style());
  e.target.classList.add(size());
  e.target.classList.add(rotation());
  e.target.classList.add(inclination());
}
criarCarta.addEventListener('click', addingClass);