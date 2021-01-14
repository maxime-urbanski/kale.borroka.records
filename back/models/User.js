const Sequelize = require("sequelize");
const SequelizeConnexion = require("../SequelizeConnexion");
const bcrypt = require("bcrypt");
const saltRounds = 15;

const User = SequelizeConnexion.define(
  "User",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 12,
      },
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    usertype: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: "USER",
    },
  },
  {
    hooks: {
      beforeCreate: (user, option) => {
        const hash = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, hash);
      },
    },
  }
);

module.exports = User;
