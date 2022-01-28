'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.dropSchema('Prices'),
      queryInterface.dropSchema('Quantities'),
    ])
  },

  down: async (queryInterface, Sequelize) => {

  }
};
