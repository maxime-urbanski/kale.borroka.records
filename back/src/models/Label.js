const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Label = SequelizeConnexion.define(
  "Label",
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
      unique: true,
    },
    logo: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    friend: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

module.exports = Label;
