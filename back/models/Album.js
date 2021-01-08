const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Album = SequelizeConnexion.define(
  "Album",
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
    note: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    folder: {
      type: Sequelize.STRING,
      allowNull: true,
      isUrl: true,
    },
  },
  { timestamps: false }
);

module.exports = Album;
