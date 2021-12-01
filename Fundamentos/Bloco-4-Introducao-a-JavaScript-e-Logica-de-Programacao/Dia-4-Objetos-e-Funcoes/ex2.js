let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for(let index in names){
  console.log('Ola ' + names[index])
  }
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let i in car){
      console.log(i, car[i])
  }