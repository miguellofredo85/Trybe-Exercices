let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() 
;
//for(let index = 0; index<numbers.length; index+=1){
  //console.log(numbers[index]);}

// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*let novoValor = 0;

for(let i = 0; i<numbers.length; i+=1){
    novoValor += numbers[i];
}
console.log(novoValor/numbers.length)*/

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//Dica :A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
/*let novoValor = 0;

for(let i = 0; i<numbers.length; i+=1){
    novoValor += numbers[i];

}
let mediaAritmetica = novoValor/numbers.length
console.log(mediaAritmetica)
*/

 // 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*if(mediaAritmetica > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
*/
// 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*let maiorValor = numbers[0];

for(let index = 1; index < numbers.length; index+=1){
     if(numbers[index]>maiorValor){
         maiorValor=numbers[index];
     }
    }
     console.log(maiorValor);*/

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/*let impares = 0;
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i]%2 !==0){
        impares+=1;
    }
    }if(impares ===0){
        console.log("nenhum valor impar encontrado")
    }
    console.log(impares)*/
// 7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/*let valorMinimo = numbers[0];
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i]<valorMinimo){
        valorMinimo=numbers[i]
    }
}

console.log(valorMinimo)*/
// 8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
/*let myArray = []; 
for(let i = 0; i <= 25; i+=1){
        myArray.push(i)
    }

  
console.log(myArray)*/

// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
/*for(let j = 0; j < myArray.length; j+=1){
    console.log(myArray[j]/2)
}*/




// para que seja de menos a maior trocar index por secondIndex desde o if em diante e trocar para < o comparativo do if

/*for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[secondIndex];
        numbers[secondIndex] = numbers[index];
        numbers[index] = position;
      }
    }
  }
  console.log(numbers)*/
let array=[];
for(let i = 0; i < numbers.length; i += 1){
    if(i+1 <numbers.length){
        array.push(numbers[i]*numbers[i+1]);
    }else{
        array.push(numbers[i]*2);
    }
}
console.log(array)