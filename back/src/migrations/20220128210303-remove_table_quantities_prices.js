'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.dropTable('Prices'),
      queryInterface.dropTable('Quantities'),
    ])
  },

  down: async (queryInterface, Sequelize) => {

  }
};
