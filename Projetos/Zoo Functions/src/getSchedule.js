const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const keyHour = Object.keys(hours);
const animais = species.map((animal) => animal.name);

const fullData = () => {
  const info = {};
  keyHour.forEach((dias) => {
    info[dias] = dias === 'Monday' ? {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    } : {
      officeHour: `Open from ${hours[dias].open}am until ${hours[dias].close}pm`,
      exhibition: species.filter((specie) => specie.availability
        .includes(dias))
        .map((nomes) => nomes.name),
    };
  });
  return info;
};

function getSchedule(scheduleTarget) {
  const info = {};
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (animais.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (keyHour.includes(scheduleTarget)) {
    const agora = scheduleTarget;
    info[scheduleTarget] = {
      officeHour: `Open from ${hours[agora].open}am until ${hours[agora].close}pm`,
      exhibition: species.filter((specie) => specie.availability
        .includes(scheduleTarget)).map((nomes) => nomes.name),
    };
    return info;
  }
  return fullData();
}

console.log(getSchedule('Sunday'));
module.exports = getSchedule;

// Muito obrigado ao Joao Paulo 'Toca' e Gustavo Santos pela ajuda e me fazer reflexionar
