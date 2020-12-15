const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Song = new SequelizeConnexion.define("Song",{
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
  duration: {
    type: Sequelize.TIME,
    allowNull: true,
  },
});

module.exports = Song;
