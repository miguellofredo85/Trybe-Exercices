const inputText = document.querySelector('#text-input');
const containerMeme = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const imgMeme = document.querySelector('#meme-image');
const memeUpBtn = document.querySelector('#meme-insert');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const memeOne = document.querySelector('#meme-1');
const memeTwo = document.querySelector('#meme-2');
const memeThree = document.querySelector('#meme-3');
const memeFour = document.querySelector('#meme-4');
// EX 1
function textMeme() {
  if (inputText.value) {
    memeText.innerText = inputText.value;
  }
}
inputText.addEventListener('keyup', textMeme);
// EX 2
// investigando pelo youtube...
memeUpBtn.addEventListener('change', (e) => {
  const photo = e.target.files[0];
  imgMeme.src = URL.createObjectURL(photo);
});
// EX 6
function water() {
  containerMeme.style.border = 'blue double 5px';
}
waterBtn.addEventListener('click', water);
function fire() {
  containerMeme.style.border = 'dashed red 3px';
}
fireBtn.addEventListener('click', fire);
function earth() {
  containerMeme.style.border = 'green groove 6px';
}
earthBtn.addEventListener('click', earth);
// EX 7
function photoMiniaturas(e){
  imgMeme.src = e.target.src; 
}
memeOne.addEventListener('click', photoMiniaturas);
memeTwo.addEventListener('click', photoMiniaturas);
memeThree.addEventListener('click', photoMiniaturas);
memeFour.addEventListener('click', photoMiniaturas);