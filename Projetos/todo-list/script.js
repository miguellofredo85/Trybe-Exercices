const btnCriaTarefa = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  if (input.value !== '') {
    const itemsLista = document.createElement('li');
    itemsLista.className = 'items';
    itemsLista.innerText = input.value;
    itemsLista.onclick = itemSeleccionado;
    itemsLista.ondblclick = itemTachado;
    listaTarefas.appendChild(itemsLista);
    input.value = '';
  }
}
btnCriaTarefa.addEventListener('click', criarTarefa);
// EX 7 com explicacao do Gabriel Pondaco!
function itemSeleccionado(e) {
  const firstClass = document.querySelector('.cinza');
  if (firstClass !== null) {
    firstClass.classList.remove('cinza');
  }
  e.target.classList.add('cinza');
}
// EX 9
function itemTachado(e) {
  const completed = document.querySelector('.completed');
  if (completed === null) {
    e.target.classList.add('completed');
  } else {
    e.target.classList.toggle('completed');
  }
}
// EX 10

function apagaLista() {
  listaTarefas.innerHTML = '';
}
const btnApaga = document.querySelector('#apaga-tudo');
btnApaga.addEventListener('click', apagaLista);
// EX 11
function apagarFinalizados() {
  const classitems = document.querySelectorAll('.items');
  for (const apaga of classitems) {
    if (apaga.classList.contains('completed')) {
      apaga.remove();
    }
  }
}
const remFin = document.getElementById('remover-finalizados');
remFin.addEventListener('click', apagarFinalizados);
// // BONUS 12

// GUARDANDO DADOS QUANDO CARREGO A PAGINA
window.onload = function onloadList() {
  const loadList = localStorage.getItem('listaguardada');
  const showList = JSON.parse(loadList);
  listaTarefas.innerHTML = showList;
  // FUNCAO GUARDADO LOCAL STORAGE
  function guardarLista() {
    const saveList = JSON.stringify(listaTarefas.innerHTML);
    localStorage.setItem('listaguardada', saveList);
  }
  // BOTOM SALVAR
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', guardarLista);
};

// BONUS 13
// tirei entendendo de duas paginas https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

// https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/
const up = document.querySelector('#mover-cima');
const down = document.querySelector('#mover-baixo');
function cima() {
  const cinza = document.querySelector('.cinza');
  if (!cinza) return;
  if (cinza.previousElementSibling) {
    cinza.parentNode.insertBefore(cinza, cinza.previousElementSibling);
  }
}
up.addEventListener('click', cima);
function baixo() {
  const cinza = document.querySelector('.cinza');
  if (!cinza) return;
  if (cinza.nextElementSibling) {
    cinza.parentNode.insertBefore(cinza.nextElementSibling, cinza);
  }
}
down.addEventListener('click', baixo);
// BONUS 14
function removerSelected() {
  const classitems = document.querySelectorAll('.items');
  for (const apaga of classitems) {
    if (apaga.classList.contains('cinza')) {
      apaga.remove();
    }
  }
}
const remSel = document.querySelector('#remover-selecionado');
remSel.addEventListener('click', removerSelected);