'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phone_numb', {
      type: Sequelize.STRING,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Users', 'phone_numb')
  }
};
