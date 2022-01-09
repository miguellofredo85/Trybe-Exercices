// funcao para factorial de um numero dado
const factorial = number => {
    let result = 1;
    for (let i = 1; i <= number; i += 1){
        result *= i;
    }
    return result
}
console.log(factorial(5))

// com recursao
const recursive = n => n === 0 ? 1 : n* recursive(n-1);
console.log(`Resultado do factorial dado e: ${recursive(5)}`);

// a maior palavra

const longestWordd = frase => { 
    let stringSplit = frase.split(' '); 
    let biggest = '';
    for (let i of stringSplit){
        if(i.length > biggest.length){
            biggest = i;
        }
    }
    return biggest
}
console.log(longestWordd(`Hello everybody`))
