// Desafio 10
function techList(nomeTech, name) {
  nomeTech.sort();
  let newArray = [];
    for (let index in nomeTech) {
      let objeto1 = {
        tech: nomeTech[index],
        name
      }
      newArray.push(objeto1);
    }
    if (nomeTech.length === 0) {
      return 'Vazio!';
  }
    return newArray;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(arrNum) {
 if (arrNum.length !== 11) {
     return 'Array com tamanho incorreto.';
   } else {  
    let repeat = 0;
      for (let i = 0; i < arrNum.length; i += 1) {
        repeat = 0;
      for( let j = 1; j < arrNum.length; j += 1 ){
        if (arrNum[i] === arrNum[j]){
          repeat += 1;
        }
      }
      if(repeat >= 3){ return 'não é possível gerar um número de telefone com esses valores'
      }
   }   
  }
      for (let index = 0; index < arrNum.length; index += 1) {
      if (arrNum[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
      else if(arrNum[index] > 9) {
                  return 'não é possível gerar um número de telefone com esses valores'   
          }     
      }
      return '(' + arrNum[0] + arrNum[1] + ') ' + arrNum[2] + arrNum[3] + arrNum[4] + arrNum[5] +   arrNum[6] + '-' + arrNum[7] + arrNum[8] + arrNum[9] + arrNum[10];
}   
//console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));
  // console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
  // console.log(generatePhoneNumber([1, 2, 3, 3, 3, 3, 7, 8, 9, 0, 1]));
  // console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));
// Desafio 12
function triangleCheck(lineaA, lineaB, lineaC) {
  if (lineaA < (lineaB + lineaC) && lineaA > Math.abs(lineaB -lineaC) ) {
    return true;
  } else if (lineaB < (lineaA + lineaC) && lineaB > Math.abs(lineaA -lineaC) ) {
    return true;
  } else if ( lineaC < (lineaB + lineaA) && lineaC > Math.abs(lineaB -lineaA) ) {
    return true;
  }else{
    return false;
  }
}

// Desafio 13
function hydrate(string) {
let regex = /\d+/g;
let matches = string.match(regex).map(Number);
let total = 0;
for(let index = 0; index < matches.length; index += 1){
  total += matches[index]
}
if(total === 1){
return total + ' copo de água'
}else{
return total + ' copos de água'
}
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
function generatePhoneNumber(array) {
  // seu código aqui
  let min = 0;
  let max = 9
  let result = [];
  let resultado;
  let repe = 0;
  for (let i = 0; i < array.length; i += 1) {
    result.push(Math.floor(Math.random() * (max - min + 1)) + min)
    for (let index = 1; index < result.length; index+=1){
      if (array[i] === array[index]) {
        repe += 1;
      }
  }
} 
    if (result.length === 11) { 
      result = `(${result[0]}${[1]}) ${result[2]}${result[3]}${result[4]}${result[5]}${result[6]}-${result[7]}${result[8]}${result[9]}${result[10]}`
      return result
  } else if (result.length !== 11) {
      resultado = "Array com tamanho incorreto."
      return resultado
  } else if (repe >= 3) {
  }
return result
}
console.log(generatePhoneNumber(array))
