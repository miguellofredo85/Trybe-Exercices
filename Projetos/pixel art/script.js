// EX 12 WINDOW CORES
  function novosCores(){
    let randomCores = document.getElementsByClassName('randomcores');
    for (let index = 0; index < randomCores.length; index += 1 ){
        let vermelho = Math.floor(Math.random()*256);
        let verde = Math.floor(Math.random()*256);
        let azul = Math.floor(Math.random()*256);
    randomCores[index].style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul}`;
    }
}
window.onload = novosCores;











let classSelected = document.querySelector('.selected');
let classColor = document.querySelectorAll('.color');
let corsPaleta = document.querySelector('#color-palette');
let pixelBoard = document.querySelector('#pixel-board');
let btnClear = document.querySelector('#clear-board');

// Ex 7
function claseMudaDeCor(){
for( let color of classColor){
    color.addEventListener('click', clickMudaColor)
}
function clickMudaColor(event){
    for (let elemento of classColor) {
        if (elemento.classList.contains('selected')) {
            elemento.classList.remove('selected');
        }
        event.target.classList.add('selected')
     }
    }
}
claseMudaDeCor();



// ex 8
// pinto os quadrados brancos (com explicacao de carolina camacho da turma 11, estupenda explicacao)

pixelBoard.addEventListener('click', cuadroPintado)

function cuadroPintado(event) {
    let classSelected = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = classSelected;
}

// Ex 9
btnClear.addEventListener('click', clearAll);
function clearAll() {
    let pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
}

    // Ex 10

    // MESSAGE ALERT
let btn = document.querySelector('#generate-board');
btn.addEventListener('click', anexPixel)

function anexPixel() {
   
    pixelBoard.innerHTML = '';
    let valor1 = 5;
    let valor2 = 50;
    let input = document.querySelector('#board-size');

    if(input.value === '') {
        alert("Board inválido!")
          }else if(input.value < valor1){
          input.value = valor1
        }else if (input.value > valor2){
         input.value = valor2
     }
    for (let index = 0; index < input.value; index += 1) {
        let subdiv = document.createElement('div');
        subdiv.className = 'subdiv';
        pixelBoard.appendChild(subdiv);
       
       for (let index2 = 0; index2 < input.value; index2 += 1) {
        let bloquinho = document.createElement('div');
        bloquinho.className = 'pixel';
        subdiv.appendChild(bloquinho);
           }
       }
}



