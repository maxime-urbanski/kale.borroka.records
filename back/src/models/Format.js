const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Format = SequelizeConnexion.define(
  "Format",
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
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    icon: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = Format;
