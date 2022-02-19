const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const { id } = species;
function countAnimals(animal) {
  const object = {};
  if (!animal) {
    species.forEach((maping) => {
      object[maping.name] = maping.residents.length;
    });
    return object;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const residentes = species.find((specie) => specie.name === animal.specie).residents;
  return residentes.filter((residente) => residente.sex === animal.sex).length;
}

console.log(countAnimals());
module.exports = countAnimals;
