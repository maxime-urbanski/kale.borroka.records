const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Tracklist = SequelizeConnexion.define(
  "Tracklist",
  {},
  {
    timestamps: false,
  }
);
module.exports = Tracklist;
