const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Artist = new SequelizeConnexion.define("Artist", {
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
});

module.exports = Artist;
