const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addItem = (object, chave, valor) => object[chave] = valor;
  console.log(addItem(lesson2, 'turno', 'noite'))

  const lista = (object) =>  Object.keys(object);
  console.log(lista(lesson1));

  const largura = (object) =>  Object.keys(object).length;
  console.log(largura(lesson1));

  const valores = (object) =>  Object.values(object);
  console.log(valores(lesson1));


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
 console.log(allLessons)

 const totalAlunos = (obj) => {
     let soma = 0;
     const valor = Object.keys(obj);
     for(i in valor){
        soma += obj[valor[i]].numeroEstudantes;
     }
     return soma
 }
 console.log(totalAlunos(allLessons))

 const valores2 = (obj, valor) => Object.values(obj)[valor];
 console.log(valores2(lesson2, 2));

 const trueOrFalse = (obj, chave, valor) => {
     let array = Object.entries(obj);
     let verdadeiro = false
     for (let i in array){
         if(array[i][0] === chave && array[i][1] === valor){
             verdadeiro = true
            }
    }
    return verdadeiro
 }
console.log(trueOrFalse(lesson2, 'professor', 'Carlos' ))

// BONUS

// const getInfo = (obj, name) => {
//     const allLessons = [];
//     let allStudent = 0;
//     const array = Object.values(obj);
//     for (index in array) {
//       if (array[index].professor === name) {
//         allLessons.push(array[index].materia)
//         allStudent += array[index].numeroEstudantes;
//       }
//     }
//     return { lessons: allLessons, estudantes: allStudent };
//   }
  
//   const createReport = (allLessons, name) => {
//     const report = {};
//     report.professor = name;
//     Object.assign(report, getInfo(allLessons, name));
//     return report;
//   }
//   console.log(createReport(allLessons, 'Maria Clara'));

var pessoas = {
  01: 'Matheus',
  02: 'João',
  03: 'Pedro'
}

Object.keys(pessoas).forEach(function(item){

  console.log(item + " - " + pessoas[item]);
  
 });