const Sequelize = require('sequelize');
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Productor = SequelizeConnexion.define('Productor',{},{timestamps:false });

module.exports = Productor;