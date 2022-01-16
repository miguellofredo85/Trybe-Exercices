// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
  return false;
 }
}
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let a = array[array.length - 1];
  let b = array[0];
  let c = a + ', ' + b;
  return c;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
 let a = wins * 3;
 let b = ties * 1;
 return a + b;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let repeat = 0;
  let maior = array[0];
  for(let index = 0; index < array.length; index += 1){
    if(array[index] > maior){
      maior = array[index]
    }
  }
  for(let index = 0; index < array.length; index += 1){
      if(maior === array[index]){
        repeat = repeat + 1;
      }
    }
    return repeat;
  }
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(6, 12, 18));
console.log(catAndMouse(2, 5, 4));

console.log(catAndMouse(44, 44, 44));

// Desafio 8
function fizzBuzz(array) {
let newarray= [];

for(let index = 0; index < array.length; index +=1 ) {

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newarray.push('fizzBuzz');

    }else if(array[index] % 5 === 0) {
      newarray.push('buzz');

    }else if(array[index] % 3 === 0) {
    newarray.push('fizz');

    }else{
    newarray.push('bug!');
  }
}
  return newarray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(string) {
  let vazio = '';
  for (let index = 0; index < string.length; index +=1 ) {
  if (string[index] === 'a') {
    vazio += '1';
  } else if(string[index]=== 'e'){
    vazio += '2';
  } else if (string[index] === 'i') {
    vazio += '3';
  } else if (string[index] === 'o') {
    vazio += '4';
  } else if (string[index] === 'u') {
    vazio += '5';
  } else {
    vazio += string[index];
  }
  
  }
  return vazio;
}

console.log(encode('hi there!'));
  
function decode(string) {
  let vazio = '';
  for (let index = 0; index < string.length; index += 1) {
  if (string[index] === '1') {
    vazio += 'a';
  } else if (string[index] === '2') {
    vazio += 'e';
  } else if (string[index] === '3') {
    vazio += 'i'; 
  } else if(string[index] === '4') {
    vazio += 'o';
  } else if (string[index] === '5') {
    vazio += 'u';
  } else {
    vazio += string[index];
  }
 }
  return vazio;
}
console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};


// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}


const functions = { encode, decode };
module.exports = functions;