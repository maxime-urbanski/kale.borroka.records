const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Location = new SequelizeConnexion.define("Location",{
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

module.exports = Location;