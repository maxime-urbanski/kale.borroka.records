const Sequelize = require('sequelize')
const SequelizeConnexion = require('../../Sequelize/SequelizeConnexion')

const Video = SequelizeConnexion.define("Video", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  youtube_url: {
    type: Sequelize.STRING(150),
    allowNull: true,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Video