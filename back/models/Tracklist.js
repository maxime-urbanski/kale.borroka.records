const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Tracklist = SequelizeConnexion.define(
  "Tracklist",
  {
    track: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Tracklist;
