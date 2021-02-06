const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const City = SequelizeConnexion.define(
  "City",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    city: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = City;
