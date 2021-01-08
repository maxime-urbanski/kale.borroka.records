const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Song = SequelizeConnexion.define(
  "Song",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    video: {
      type: Sequelize.STRING(255),
      allowNull: true,
      isUrl: true,
    },
  },
  { timestamps: false }
);

module.exports = Song;
