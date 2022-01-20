// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
//   emailListInData.forEach(showEmailList);
//   // Adicione seu código aqui

//   const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () =>{return numbers.find((number)=> number % 3 === 0 && number % 5 === 0)}
//   // Adiciona seu código aqui


// console.log(findDivisibleBy3And5())

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//     return names.find((name) => name.length > 5)
//   // Adicione seu código aqui:
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//       return musicas.find((musica) => musica.id === id)
//     // Adicione seu código aqui
//   }
  
//   console.log(findMusic('31031685'))

//   const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//  return arr.some((nameabaixo) =>  nameabaixo === name )
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//       return arr.every((currentAge) => currentAge.age >= minimumAge)
//     //Adicione seu código aqui
//   }
  
//   console.log(verifyAges(people, 18));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people.sort((arrOne, arrTwo) => arrOne.name - arrTwo.name) 
  people.sort((arrOne, arrTwo) => arrTwo.name - arrOne.name) 
  console.log(people);  