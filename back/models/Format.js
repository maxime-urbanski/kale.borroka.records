const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Format = new SequelizeConnexion.define("Format",{
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

module.exports = Format;
