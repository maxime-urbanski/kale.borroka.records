const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");
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
        len: [8, 24],
      },
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
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
        const hash = bcrypt.genSaltSync(saltRounds);
        user.password = bcrypt.hashSync(user.password, hash);
      },
      beforeUpdate: (user, option) => {
        if (user.changed("password", true)) {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.get("password"));
        }
      },
    },
  }
);

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
