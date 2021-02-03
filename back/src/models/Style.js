const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Style = SequelizeConnexion.define(
  "Style",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Style;
