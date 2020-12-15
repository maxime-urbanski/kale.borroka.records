const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");

const Article = SequelizeConnexion.define("Article",{
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
});

module.exports = Article;
