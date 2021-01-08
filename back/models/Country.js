const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Country = SequelizeConnexion.define(
  "Country",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    country: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true,
    },
    tag: {
      type: Sequelize.STRING(10),
      allowNull: true,
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = Country;
