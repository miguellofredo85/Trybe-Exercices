const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const edadeMaior = species.find((finding) => finding.name === animal);
  return edadeMaior.residents.every((idade) => idade.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
