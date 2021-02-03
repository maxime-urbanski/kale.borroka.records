const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Price = SequelizeConnexion.define(
  "Price",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Price;
