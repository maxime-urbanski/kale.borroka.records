const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const SequelizeConnexion = require('../../Sequelize/SequelizeConnexion');

const Tracklist = SequelizeConnexion.define(
  "Tracklist", {
  position: {
    type: sequelize.INTEGER,
    allowNull: true,
    defaultValue: 1
  }
}, {
  timestamps: false
}
)
module.exports = Tracklist;