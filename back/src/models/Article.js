const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Article = SequelizeConnexion.define("Article", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Article;
