const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Quantity = SequelizeConnexion.define("Album", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Quantity;
