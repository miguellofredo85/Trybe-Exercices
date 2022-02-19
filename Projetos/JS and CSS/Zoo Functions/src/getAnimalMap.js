const data = require('../data/zoo_data');
// so copie e colei aqui o exercicio do Joao Ferraz depois de ter aprovado o 80%, pois eu nao consegui fazer de meu jeito,
// ai pedi pra ele me explicar seu codigo, ficamos 3 horas fazendo desde zero para entender o passo a passo dele, Muito Agradecido ao JOAO!!!

function getFilteredAnimals(specie, gender) {
  const filteredAnimals = [];
  specie.residents.forEach((resident) => {
    if (!gender) filteredAnimals.push(resident.name);
    if (resident.sex === gender) filteredAnimals.push(resident.name);
  });
  return filteredAnimals;
}

function getAnimalMap(options = {}) {
  const locations = {};
  data.species.forEach((specie) => {
    if (!locations[specie.location]) locations[specie.location] = [];
    if (options.includeNames) {
      const residentsNames = [];
      residentsNames.push(...getFilteredAnimals(specie, options.sex));
      if (options.sorted) residentsNames.sort();
      locations[specie.location].push({ [specie.name]: residentsNames });
    } else {
      locations[specie.location].push(specie.name);
    }
  });

  return locations;
}

module.exports = getAnimalMap;
