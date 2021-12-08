/*
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';


let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Agregando algum texto';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let tercerFilho = elementoOndeVoceEsta.nextElementSibling;

let tercerFilho2 = pai.lastElementChild.previousElementSibling; 
*/

/*
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .

CRIANDO ELEMENTOS

Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho .

*/
/*
const pai1 = document.getElementById('pai');
const irmaoEOVE = document.createElement('section');
irmaoEOVE.id = 'irmaoEOVE';
pai.appendChild(irmaoEOVE);


const filhoEOVE = document.createElement('section');
filhoEOVE.id('filhoEOVE');
elementoOndeVoceEsta.appendChild(filhoEOVE);

let filhoPFDF = document.createElement('p');
filhoPFDF.id('filhoPFDF');
primeiroFilhoDoFilho.appendChild(filhoPFDF);

let terceiroFilho = filhoPFDF.parentElement.parentElement.nextElementSibling;   

*/
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

const pai = document.querySelector('#pai');

for(let index = pai.childNodes.length-1; index > 0; index -= 1){
    let posicion = pai.childNodes[index];
    if (posicion !== 'elementoOndeVoceEsta'){
        posicion.remove();
    }
}
let segundoFdF = document.querySelector('#segundoEUltimoFilhoDoFilho');
segundoFdF.remove();

