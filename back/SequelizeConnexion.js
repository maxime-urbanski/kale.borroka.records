require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;

module.exports =  new Sequelize({
  host: "localhost",
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  dialect: DB_DIALECT,  
});
