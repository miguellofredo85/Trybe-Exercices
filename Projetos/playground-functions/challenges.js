// Desafio 1
const compareTrue = (a, b) => a === true && b === true? true:false;
  
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
const calcArea = (base, height) => {let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
const splitSentence = string => string.split(' ');
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
const concatName = array => `${array[array.length - 1]}, ${array[0]}`;
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
const footballPoints = (wins, ties) => (wins*3) + (ties*1);
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
const highestCount = array => {
  let repeat = 0;
  let maior = array[0];
  for(index of array){
    if(array[index] > maior){
      maior = array[index]
    }
  }
  for(index of array){
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
const fizzBuzz = array => {
let newarray= [];
for(index of array ) {
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
const encode = string => {
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
  
const decode = string => {
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
