const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Price = new SequelizeConnexion("Price",{
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
});


module.exports = Price;