const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Label = SequelizeConnexion.define("Label", {
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
  logo: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  friend: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Label;
