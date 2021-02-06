const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Location = SequelizeConnexion.define(
  "Location",
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

module.exports = Location;
