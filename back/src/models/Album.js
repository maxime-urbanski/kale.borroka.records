const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

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
      type: Sequelize.TEXT,
      allowNull: true,
    },
    folder: {
      type: Sequelize.STRING,
      allowNull: true,
      isUrl: true,
    },
    kbrProd: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    releaseDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    kbrNum: {
      type: Sequelize.INTEGER,
      allowNull: true,
    }
  },
  { timestamps: false }
);

module.exports = Album;
