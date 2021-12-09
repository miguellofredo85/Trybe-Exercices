function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function calendario (){
    let UlDias = document.querySelector('#days');
for (let index = 0; index < dezDaysList.length; index += 1){
let numbersDay = dezDaysList[index];
let listaDias = document.createElement('li')


if (numbersDay === 24 || numbersDay === 31 ){
  listaDias.className = 'day holyday';
  listaDias.innerHTML = numbersDay;
  UlDias.appendChild(listaDias)
}else if (numbersDay === 4 || numbersDay === 11 || numbersDay === 18 ){
  listaDias.className = 'day friday';
  listaDias.innerHTML = numbersDay;
  UlDias.appendChild(listaDias)
}else if (numbersDay === 25){
  listaDias.className = 'day holyday friday';
  listaDias.innerHTML = numbersDay;
  UlDias.appendChild(listaDias)
}else {
  listaDias.className = 'day';
  listaDias.innerHTML = numbersDay;
  UlDias.appendChild(listaDias)
    }
  }
}
calendario();

function botomFeriados (string){
  let botom = document.createElement('button');
  let botomId = 'btn-holyday';
  let botomClass = document.querySelector('.buttons-container');

  botom.innerHTML = string;
  botom.id = botomId;
  botomClass.appendChild(botom);
}
botomFeriados('Feriados');

function colorHolyday(){
let botomId = document.querySelector('#btn-holyday');
let backgroundColor = 'rgb(238,238,238)';
let colorFundoDois = 'red';
let allHolyday = document.querySelectorAll('.holyday');

botomId.addEventListener('click', function(){
for (let index = 0; index < allHolyday.length; index += 1) {
  if (allHolyday[index].style.backgroundColor === colorFundoDois){
    allHolyday[index].style.backgroundColor = backgroundColor;
    } else{
      allHolyday[index].style.backgroundColor =  colorFundoDois; 
      }
    }
  })
}
colorHolyday();


function btnSextou (string){
  let btn = document.createElement('button');
  btn.innerHTML = string ;
  btn.id = 'btn-friday';
  let divContainer = document.querySelector('.buttons-container');
  divContainer.appendChild(btn);
}
btnSextou('Sexta-feira');

function  sextaMuda (arr){
  let btnSexta = document.querySelector('#btn-friday');
  let sextaFeira = document.getElementsByClassName('friday');
  let sextou = 'Sextou!';

  btnSexta.addEventListener('click', function(){
    for (let index = 0; index < sextaFeira.length; index += 1){
      if ( sextaFeira[index].innerHTML !== sextou){
        sextaFeira[index].innerHTML = sextou;
      }else {
        sextaFeira[index].innerHTML = arr[index];
      }
    }
  })
}
let sextasFeiras = [4, 11, 18, 25];
sextaMuda(sextasFeiras);



function mouseOver (){
  let classDay = document.querySelector('#days');

  classDay.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
  })
}
  function mouseSai(){
    let classDay = document.querySelector('#days');

    classDay.addEventListener('mouseout', function(event){
      event.target.style.fontSize = '20px';
  })
}
mouseOver();
mouseSai();

function estudarMuito (string){
  let claseTarefa = document.querySelector('.my-tasks')
  let spanTag = document.createElement('span');
  spanTag.innerHTML = string;
  claseTarefa.appendChild(spanTag);
}
estudarMuito('Estudar');

function legendaCor (cor){
  let div = document.createElement('div');
  let taskClass = document.querySelector('.my-tasks');
  div.className = 'task';
  div.style.backgroundColor = cor;
  taskClass.appendChild(div)
}

legendaCor('yellow');













