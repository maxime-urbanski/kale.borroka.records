const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Article = SequelizeConnexion.define("Article", {
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
});

module.exports = Article;
