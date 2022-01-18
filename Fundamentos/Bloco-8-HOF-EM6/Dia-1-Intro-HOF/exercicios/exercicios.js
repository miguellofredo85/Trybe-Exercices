const employ = (name) =>{
    let email = name.toLowerCase().split(' ').join('');
    return {name, Email: `${email}@gmail.com`};
}

const newEmployees = (employ) => {
    const employees = {
      id1: employ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employ('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employ('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees(employ))

// ex 2  
//- Desenvolva uma HOF que retorna o resultado de um sorteio.
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado 
//e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sameNumber = (numOne, numTwo) =>  numOne === numTwo;

const game = (numOne, callback) => {
    const randomNumber = Math.trunc((Math.random()*5)) + 1;
    console.log(randomNumber)
    return callback(numOne, randomNumber)? 'You Win!': 'Try Again'
}


console.log(game(3, sameNumber));

// ex 3
// - Crie uma HOF que receberá três parâmetros:
// - O primeiro será um array de respostas corretas (Gabarito);
// - O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// - O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. 
// Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto. 
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 
// Utilize os seguintes arrays:.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparing = (answer, student) => {
    if (answer === student){
        return 1;
    }
    if(answer === 'N.A'){
        return 0;
    }
    return -0.5;
};

const test = (answer, student, callback) => {
    let sum = 0;
    for (let index of RIGHT_ANSWERS) {
        const result = callback(answer[index],student[index]);
        sum += result
    }
    return `Total points: ${sum}`
}

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, comparing));   