const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((elem) => (elem.age < 18)).length,
    adult: entrants.filter((elem) => (elem.age >= 18 && elem.age < 50)).length,
    senior: entrants.filter((elem) => (elem.age >= 50)).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  let soma = 0;
  const funcaoAnterior = countEntrants(entrants);

  soma += (funcaoAnterior.child * prices.child);
  soma += (funcaoAnterior.adult * prices.adult);
  soma += (funcaoAnterior.senior * prices.senior);
  return soma;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
