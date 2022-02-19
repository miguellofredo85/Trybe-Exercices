const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((empl) => empl.managers.find((elem) => elem === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((filt) => filt.managers.find((elem) => elem === managerId))
      .map((maping) => `${maping.firstName} ${maping.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
