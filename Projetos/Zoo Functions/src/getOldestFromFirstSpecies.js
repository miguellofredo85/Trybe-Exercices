const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimalId = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = species
    .find((specie) => specie.id === firstAnimalId).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(firstAnimal[0]);
}
console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = getOldestFromFirstSpecies;
// feito em companhi do joao toca e guga santos
