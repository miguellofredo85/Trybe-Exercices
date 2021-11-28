// exerciocio 1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 4;
const b = 7;

const suma = a+b;
console.log(suma);
const resta = a-b;
console.log(resta);
const division = a/b;
console.log(division);
const multiplicacao = a*b;
console.log(multiplicacao);
const resto = a%b;
console.log(resto);

//exercicio 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
let num1 = 10;
let num2 = 74;

if(num2 > num1){
    console.log(num2 + ' e o maior')
}
else{
    console.log(num1 + ' e o maior')
}

// 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const num5 = 5;
const num10 = 10;
const num15 = 15;

if(num15 > num5 && num15 > num10){
    console.log(num15 + ' e o maior')
}
else if(num5 > num10 && num5 > num15){
    console.log(num5 + ' e o maior')
}
else{
    console.log(num10 + ' e o maior')
}


// 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const valorDefinido = 44;

if(valorDefinido > 0){
    console.log("positive")
}
else if(valorDefinido < 0){
    console.log("negative")
}
else{
    console.log("zero")
}



// 5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.Um ângulo será considerado inválido se não tiver um valor positivo.

const valorAngulo1 = 60;
const valorAngulo2 = 90;
const valorAngulo3 = 30;

let somaAngulos = valorAngulo1+valorAngulo2+valorAngulo3
let angulosPositivos = valorAngulo1>0 && valorAngulo2>0 && valorAngulo3>0

if(somaAngulos === 180){
    if(angulosPositivos){
        console.log(true);
}
else{
    console.log(false);
}
}
else{
    console.log("angulo invalido");
}

/* 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/
const pecaXadrez = "bishop"

switch(pecaXadrez.toLowerCase()){
    case"bishop":
        console.log("Diagonal Izquerda para Acima");
        break;
    case"rey":
        console.log("Diagonal Direita apra Acima");
        break;
    case "cavalho":
        console.log("Salto acima direita");
        break;
    case "rainha":
        console.log("Diagonal Direita para Embaixo");
        break;
    default:
        console.log("erro");
    }

/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let porcentagem = 65;

if(porcentagem >= 90 && porcentagem <= 100){
    console.log("A");
}else if(porcentagem >= 80 && porcentagem < 90){
    console.log("B");
}else if(porcentagem >= 70 && porcentagem < 80){
    console.log("C");
}else if(porcentagem >=60 && porcentagem < 70){
    console.log("D");
}else if(porcentagem >= 50 && porcentagem < 60){
    console.log("E");
}else if(porcentagem < 50 && porcentagem >= 0){
    console.log("F")
}else if(porcentagem < 0 || porcentagem > 100){
    console.log("erro e encerrar")
}


/* 8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/
const valor1 = 21;
const valor2 = 33;
const valor3 = 2;

if(valor1%2 === 0 || valor2%2 === 0 || valor3%2 === 0){
    console.log(true);
}
else{
    console.log(false);
}


/* 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const numeroUm = 20;
const numeroDois = 65;
const numeroTres = 40;

if(numeroUm%2 !== 0 || numeroDois%2 !== 0 || numeroTres%2 !== 0){
    console.log(true);
}
else{
    console.log(false);
}
/* 10 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/
const valorCusto = 45
const valorVenda = 80;

if(valorCusto >= 0 && valorVenda >= 0){
    const costoMaisImposto = (valorCusto * 20) / 100
    const ganancia = (valorVenda - costoMaisImposto) *1000
    console.log(ganancia)
}else{
    console.log("Erro: Fechar sistema")
}

/* 11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?*/











