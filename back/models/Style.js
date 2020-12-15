const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Style = new SequelizeConnexion.define("Style",{
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

module.exports = Style;
