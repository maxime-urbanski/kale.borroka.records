const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Tracklist = SequelizeConnexion.define(
  "Tracklist",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
  },
  { timestamps: false }
);

module.exports = Tracklist;
