const Sequelize = require("sequelize");
const SequelizeConnexion = require('../../Sequelize/SequelizeConnexion');

const Clip = SequelizeConnexion.define('Clip', {},{timestamps: false});

module.exports = Clip;