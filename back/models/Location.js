const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Location = SequelizeConnexion.define("Location", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  city: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  town: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Location;
