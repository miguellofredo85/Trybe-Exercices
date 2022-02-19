const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Peguei o codigo do Joao 'Toca 'Elpidio pois a gente fez uma parte juntos eu pasei a funcao fora getEmployeesCoverage a parte do objeto
// ja logo eu nao consegui seguir e ele foi que solucionou e me explico o restante e seu funcionamento, mas no que mais travei foi em
// como devolver tudos os employees e na insercao dos parametros como objetos. Fiquei maloco mesmo com esse exercicio e ainda falta o 7.

const getSpecies = (id) => {
  const arrIdAni = employees.find((eleFind) => eleFind.id === id).responsibleFor;
  return arrIdAni.map((eleMap) => species.find((eF2) => (eF2.id === eleMap))).map((eM) => eM.name);
};

const getLocat = (id) => {
  const respAni = employees.find((eleFind) => eleFind.id === id).responsibleFor;
  const objAni = respAni.map((eleMap) => species.find((eF2) => (eF2.id === eleMap)));
  return objAni.map((eM) => eM.location);
};

const fora = (p) => {
  const a = employees.find((eF) => eF.firstName === p || eF.lastName === p || eF.id === p);
  if (a === undefined) {
    throw new Error('Informações inválidas');
  }
  if (a) {
    return a;
  }
};

const semParametro = () => {
  const aux = [];
  employees.forEach((eleFor) => {
    const obj = {
      id: eleFor.id,
      fullName: `${eleFor.firstName} ${eleFor.lastName}`,
      species: getSpecies(eleFor.id),
      locations: getLocat(eleFor.id),
    };
    aux.push(obj);
  });
  return aux;
};

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return semParametro();
  }
  const val = Object.values(parametro)[0];
  if (parametro.name || parametro.id) {
    const obj = {
      id: fora(val).id,
      fullName: `${fora(val).firstName} ${fora(val).lastName}`,
      species: getSpecies(fora(val).id),
      locations: getLocat(fora(val).id),
    };
    return obj;
  }
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
