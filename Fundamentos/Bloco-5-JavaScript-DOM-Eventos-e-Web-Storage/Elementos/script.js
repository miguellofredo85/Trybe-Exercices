let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';


let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Agregando algum texto';

let primeiroFilho = pai.firstElementChild;

elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let tercerFilho = elementoOndeVoceEsta.nextElementSibling;

let tercerFilho2 = pai.lastElementChild.previousElementSibling; 


/*
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .
*/






