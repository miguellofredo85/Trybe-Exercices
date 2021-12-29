const colorName = document.querySelector('#rgb-color');
const btnCores = document.querySelector('#reset-game');
const classBalls = document.querySelectorAll('.ball');
const resposta = document.querySelector('#answer');
const pts = document.querySelector('#score');

function colors() {
  const cor = Math.floor(Math.random() * 255 + 1);
  return cor;
}

function ballsColors() {
  colorName.innerText = `(${colors()}, ${colors()}, ${colors()})`;
  resposta.innerText = 'Escolha uma cor';
  const randomNumber = Math.floor(Math.random() * 6);
  for (let i = 0; i < classBalls.length; i += 1) {
    if (i !== randomNumber) {
      classBalls[i].style.backgroundColor = `rgb(${colors()}, ${colors()}, ${colors()})`;
    }
    classBalls[i].addEventListener('click', gameGuessColor);
  }
  classBalls[randomNumber].style.backgroundColor = `rgb${colorName.innerText}`;
}
ballsColors();

btnCores.addEventListener('click', ballsColors);

function gameGuessColor(e) {
  if (e.target.style.backgroundColor === `rgb${colorName.innerText}`) {
    resposta.innerText = 'Acertou!';
    const pontos = parseInt(pts.innerText);
    localStorage.setItem('pontos', pontos);
    const result = parseInt(localStorage.getItem('pontos')) + 3;
    localStorage.setItem('pontos', result);
    pts.innerText = result;
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
    pts.innerText = 0;
  }
}
function score() {
  if (localStorage.getItem('pontos')) {
    pts.innerText = localStorage.getItem('pontos');
  } else {
    pts.innerText = 0;
  }
}
function reset(e) {
  ballsColors();
  gameGuessColor();
  score();
}