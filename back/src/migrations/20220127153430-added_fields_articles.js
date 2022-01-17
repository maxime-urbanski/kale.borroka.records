'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Articles', 'quantity', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.addColumn('Articles', 'price', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Articles', 'quantity'),
      queryInterface.removeColumn('Articles', 'price')
    ]);
  }
};
