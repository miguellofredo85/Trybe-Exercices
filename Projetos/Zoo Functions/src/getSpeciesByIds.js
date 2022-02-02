const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((maping) => species.find((filt) => filt.id === maping));
}

module.exports = getSpeciesByIds;
