const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Tracklist = SequelizeConnexion.define(
  "Tracklist",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    track: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { timestamps: false }
);

module.exports = Tracklist;
