/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function checkarPalindromo(palindromo){
  for(let i in palindromo){
      if(palindromo[i] !== palindromo[(palindromo.length-1)-i])
      {
        return false
      }
            else{
                    return true
    }
  }
}

console.log(checkarPalindromo('arara'));
console.log(checkarPalindromo('desenvolvimento'));*/
/*2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function enteros(array){
    let valorMaior=0;
    for(let index in array){
        if(array[valorMaior]<array[index]){
            valorMaior=index
        }
    }
return valorMaior;
}
console.log(enteros([2, 3, 6, 7, 10, 1]));
*/
/*3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function enteros(array){
    let valorMenor=0;
    for(let index in array){
        if(array[index]<array[valorMenor]){
            valorMenor=index
        }
    }
return valorMenor;
}
console.log(enteros([2, 4, 6, 7, 10, 0, -3]));*/

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
/*
function funcionPrueba(array){
    
    for(let i in array){
        if(array[0].length<array[i].length){
            array[0]=array[i]
        }
    }
    return array[0];
}
console.log(funcionPrueba(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
*/

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. Array de teste: [2, 3, 2, 5, 8, 2, 3]; .

function enteroRepeat(array){
    
    for(let i in array){
        let numeroUm=array[i];
        for(let j in array){
            if(numeroUm===array[j]){
                
            }

        }
    }

}




