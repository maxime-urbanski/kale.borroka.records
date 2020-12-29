const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Write = SequelizeConnexion.define(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
  },
  { timestamps: false }
);
