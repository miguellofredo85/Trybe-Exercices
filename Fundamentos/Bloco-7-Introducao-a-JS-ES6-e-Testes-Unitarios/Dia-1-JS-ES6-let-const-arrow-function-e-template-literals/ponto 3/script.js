const btnCounter = document.querySelector('#btn-counter');
const count = document.querySelector('.count');
let clickCount = 0;
btnCounter.addEventListener('click', ()=>count.innerHTML = clickCount++);

