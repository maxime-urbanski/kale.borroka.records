const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Tracklist = SequelizeConnexion.define(
  "Tracklist",
  {
    track: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { timestamps: false }
);

module.exports = Tracklist;
